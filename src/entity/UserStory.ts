import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from './User';
import { Story } from './Story';

@Entity()
export class UserStory {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(type => User, User => User.responderStories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public user: User | null;

    @ManyToOne(type => Story, Story => Story.respondents, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public story: Story | null;
}