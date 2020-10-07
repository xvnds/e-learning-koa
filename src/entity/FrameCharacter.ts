import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { CharacterEmotion } from './CharacterEmotion';
import { Frame } from './Frame';
import { StoryCharacter } from './StoryCharacter';

@Entity()
export class FrameCharacter {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true, type: 'text' })
    public position: string;

    @ManyToOne(type => Frame, Frame => Frame.characters, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public frame: Frame;

    @ManyToOne(type => CharacterEmotion, CharacterEmotion => CharacterEmotion.frames, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public emotion: CharacterEmotion;

    @ManyToOne(type => StoryCharacter, StoryCharacter => StoryCharacter.frames, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public character: StoryCharacter;
}