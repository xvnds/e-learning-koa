import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { CharacterEmotion } from './CharacterEmotion';
import { StoryCharacter } from './StoryCharacter';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public gender: string;

    @OneToMany(type => CharacterEmotion, CharacterEmotion => CharacterEmotion.character, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public emotions: CharacterEmotion[];

    @OneToMany(type => StoryCharacter, StoryCharacter => StoryCharacter.character, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public stories: StoryCharacter[];
}