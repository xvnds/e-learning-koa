import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { UserType } from './UserType';
import { UserResponse } from './UserResponse';
import { UserStory } from './UserStory';
import { Story } from './Story';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true, type: 'text' })
    public firstName: string;

    @Column({ nullable: true, type: 'text' })
    public lastName: string;

    @Column({ nullable: true, type: 'text' })
    public username: string;

    @Column({ nullable: true, type: 'text' })
    public gender: string;

    @Column({ nullable: true, type: 'text' })
    public password: string;

    @Column({ nullable: true, type: 'text' })
    public email: string;

    @Column({ nullable: true, type: 'text' })
    public phoneNumber: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    public createdDateTime: string;

    @OneToMany(type => Story, Story => Story.user, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public stories: Story[];

    @OneToMany(type => UserResponse, UserResponse => UserResponse.user, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public responses: UserResponse[];

    @OneToMany(type => UserStory, UserStory => UserStory.user, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public responderStories: UserStory[];

    @ManyToOne(type => UserType, UserType => UserType.users, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public userType: UserType | null;
}