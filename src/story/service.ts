import { getRepository, createQueryBuilder } from 'typeorm';
import {
    ICreateStoryBody
} from './types';
import { Story } from '../entity/Story';
import { StoryType } from '../entity/StoryType';
import { User } from '../entity/User';
import errorMsg from '../utils/error';

const StoryRepository = () => getRepository(Story);
const StoryTypeRepository = () => getRepository(StoryType);
const UserRepository = () => getRepository(User);

export default class StoryService {
    public async createStory(body: ICreateStoryBody, userId: number): Promise<any> {
        try {
            const user = await UserRepository().findOne(userId);
            const storyType = await StoryTypeRepository().findOne(body.storyTypeId);
            const data = {
                user,
                storyType,
                title: body.title,
                description: body.description
            }
            const story = await StoryRepository().save(data);
            return story;
        } catch (err) {
            return Promise.reject(err);
        }
    }

    public async deleteStory(id: number): Promise<string> {
        try {
            const user = await StoryRepository().findOne({ id });
            if (!user) {
                const err: any = await errorMsg(404, "Story does not exist.");
                return Promise.reject(err);
            }
            await StoryRepository().delete(id)
            return `DELETED`;
        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async getStory(id: number): Promise<any> {
        try {
            const story = await StoryRepository()
                .createQueryBuilder('Story')
                .leftJoinAndSelect('Story.frames', 'Frames')
                .where('Story.id = :id', { id })
                .getOne();
            if (!story) {
                const err: any = await errorMsg(404, "Story does not exist.");
                return Promise.reject(err);
            }
            return story;
        } catch (e) {
            return Promise.reject(e)
        }
    }
}