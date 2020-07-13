import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Conclusion } from './Conclusion';
import { StoryType } from './StoryType';
import { User } from './User';
import { Frame } from './Frame';
import { UserResponse } from './UserResponse';
import { UserStory } from './UserStory';
import { PersonalityType } from './PersonalityType';

@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column({ nullable: true, type: 'text' })
    public description: string;

    @Column({ default: false, type: 'boolean' })
    public published: boolean;

    @Column({ default: false, type: 'boolean' })
    public private: boolean;

    @ManyToOne(type => User, User => User.stories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public user: User | null;

    @ManyToOne(type => StoryType, StoryType => StoryType.stories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public storyType: Story | null;

    @OneToMany(type => Frame, Frame => Frame.story, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frames: Frame[];

    @OneToMany(type => UserResponse, UserResponse => UserResponse.story, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public userResponses: UserResponse[];

    @OneToMany(type => UserStory, UserStory => UserStory.story, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public respondents: UserStory[];

    @OneToMany(type => PersonalityType, PersonalityType => PersonalityType.story, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public personalityTypes: PersonalityType[] | null;

    @OneToMany(type => Conclusion, Conclusion => Conclusion.story, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public conclusions: Conclusion[] | null;
}