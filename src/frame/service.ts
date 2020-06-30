import { getRepository } from 'typeorm';
import {
    ICreateFrameBody
} from './types';
import errorMsg from '../utils/error';
import { Button } from '../entity/Button';
import { ButtonType } from '../entity/ButtonType';
import { Frame } from '../entity/Frame';
import { FrameType } from '../entity/FrameType';
import { Story } from '../entity/Story';
import { User } from '../entity/User';

const ButtonRepository = () => getRepository(Button);
const ButtonTypeRepository = () => getRepository(ButtonType);
const FrameRepository = () => getRepository(Frame);
const FrameTypeRepository = () => getRepository(FrameType);
const StoryRepository = () => getRepository(Story);
const UserRepository = () => getRepository(User);

export default class StoryService {
    public async createFrame(body: ICreateFrameBody, userId: number): Promise<any> {
        try {
            const user = await UserRepository().findOne(userId);
            if (!user) {
                const err: any = await errorMsg(404, "User does not exist.");
                return Promise.reject(err);
            }
            const story = await StoryRepository().findOne(body.storyId);
            if (!story) {
                const err: any = await errorMsg(404, "Story does not exist.");
                return Promise.reject(err);
            }
            const frameType = await FrameTypeRepository().findOne(body.frameTypeId);
            if (!frameType) {
                const err: any = await errorMsg(404, "Frame Type does not exist.");
                return Promise.reject(err);
            }
            const data = {
                frameType,
                story,
                user,
                title: body.title,
                text: body.text,
                bgUri: body.bgUri
            }
            const frame = await FrameRepository().save(data);
            const buttonType = await ButtonTypeRepository().findOne(1);
            const buttons = body.buttons.map( button => {
                return {
                    frame,
                    buttonType,
                    text: button.text,
                    score: button.score,
                    destination: null,
                }
            })
            ButtonRepository().save(buttons);
            if (body.fromButtonId) {
                let fromButton = await ButtonRepository().findOne(body.fromButtonId);
                if (!fromButton) {
                    const err: any = await errorMsg(404, "Button does not exist.");
                    return Promise.reject(err);
                }
                fromButton.destination = frame;
                ButtonRepository().save(fromButton);
            }
            return frame;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public async getFrame(id: number): Promise<any> {
        try {
            const frame = await FrameRepository()
                .createQueryBuilder('Frame')
                .leftJoinAndSelect('Frame.buttons', 'Buttons')
                .leftJoinAndSelect('Frame.story', 'Story')
                .leftJoinAndSelect('Buttons.destination', 'Destination')
                .leftJoinAndSelect('Frame.frameType', 'FrameType')
                .where('Frame.id = :id', { id })
                .getOne();
            if (!frame) {
                const err: any = await errorMsg(404, "Frame does not exist.");
                return Promise.reject(err);
            }
            return frame;
        } catch (err) {
            return Promise.reject(err);
        }
    }
}