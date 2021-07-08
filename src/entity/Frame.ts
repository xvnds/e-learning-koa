import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Background } from './Background';
import { Conclusion } from './Conclusion';
import { FrameCharacter } from './FrameCharacter';
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

    @OneToMany(type => Button, Button => Button.frame, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public buttons: Button[];

    @OneToMany(type => Button, Button => Button.destination)
    public fromButton: Button[];

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

    @ManyToOne(type => Conclusion, Conclusion => Conclusion.fromFrames, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public conclusion: Conclusion | null;

    @OneToMany(type => UserResponse, UserResponse => UserResponse.frame, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public userResponses: UserResponse[];

    @ManyToOne(type => Background, Background => Background.frames, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public background: Background;

    @OneToMany(type => FrameCharacter, FrameCharacter => FrameCharacter.frame, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public characters: FrameCharacter[];
}