import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { User } from './User';
import { FrameType } from './FrameType';
import { Story } from './Story';
import { Button } from './Button';
import { UserResponse } from './UserResponse';

@Entity()
export class Frame {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true, type: 'text' })
    public title: string;

    @Column({ nullable: true, type: 'text' })
    public text: string;

    @Column({ nullable: true, type: 'text' })
    public bgUri: string;

    @OneToMany(type => Button, Button => Button.frame, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public buttons: Button[];

    @OneToMany(type => Button, Button => Button.destination)
    public fromButton: Button[];

    @ManyToOne(type => User, User => User.stories, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public user: User | null;

    @ManyToOne(type => FrameType, FrameType => FrameType.frames, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public frameType: FrameType | null;

    @ManyToOne(type => Story, Story => Story.frames, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public story: Story | null;

    @OneToMany(type => UserResponse, UserResponse => UserResponse.frame, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public userResponses: UserResponse[];
}