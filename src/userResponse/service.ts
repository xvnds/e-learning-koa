import { getRepository } from 'typeorm';
import { sumBy } from 'lodash';
import {
    ICreateResponseBody
} from './types';
import { Button } from '../entity/Button';
import { Story } from '../entity/Story';
import { User } from '../entity/User';
import { UserResponse } from '../entity/UserResponse';
import errorMsg from '../utils/error';

const ButtonRepository = () => getRepository(Button);
const StoryRepository = () => getRepository(Story);
const UserRepository = () => getRepository(User);
const UserResponseRepository = () => getRepository(UserResponse);

export default class StoryService {
    public async createResponse(body: ICreateResponseBody, userId: number): Promise<any> {
        try {
            const user = await UserRepository().findOne(userId);
            if (!user) {
                const err: any = await errorMsg(404, "User does not exist.");
                return Promise.reject(err);
            }
            const button = await ButtonRepository()
                .createQueryBuilder('Button')
                .leftJoinAndSelect('Button.frame', 'Frame')
                .leftJoinAndSelect('Frame.story', 'Story')
                .where('Button.id = :buttonId', { buttonId: body.buttonId })
                .getOne();
            if (!button) {
                const err: any = await errorMsg(404, "Button does not exist.");
                return Promise.reject(err);
            }
            const userResponse = {
                user,
                button: button,
                frame: button.frame,
                story: button.frame.story
            }
            const saveResponse = await UserResponseRepository().save(userResponse)
            return saveResponse;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public async getUserResponse(userId: number, storyId: number): Promise<any> {
        try {
            const user = await UserRepository().findOne(userId);
            if (!user) {
                const err: any = await errorMsg(404, "User does not exist.");
                return Promise.reject(err);
            }
            const story = await StoryRepository().findOne(storyId);
            if (!story) {
                const err: any = await errorMsg(404, "Story does not exist.");
                return Promise.reject(err);
            }
            const response = await UserResponseRepository()
                .createQueryBuilder('UserResponse')
                .leftJoinAndSelect('UserResponse.frame', 'Frame')
                .leftJoinAndSelect('UserResponse.button', 'Button')
                .leftJoinAndSelect('UserResponse.user', 'User')
                .leftJoinAndSelect('UserResponse.story', 'Story')
                .where('User.id = :userId', { userId })
                .andWhere('Story.id = :storyId', { storyId })
                .getMany();
            if (!response) {
                const err: any = await errorMsg(404, "No responses found");
                return Promise.reject(err);
            }
            const totalScore = sumBy(response, item => {
                return parseInt(item.button.score)
            })
            return {response, totalScore};
        } catch (err) {
            return Promise.reject(err);
        }
    }
}