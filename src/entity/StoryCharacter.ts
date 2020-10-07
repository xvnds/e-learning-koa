import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Character } from './Character';
import { FrameCharacter } from './FrameCharacter';
import { Story } from './Story';

@Entity()
export class StoryCharacter {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @ManyToOne(type => Character, Character => Character.stories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public character: Character;

    @ManyToOne(type => Story, Story => Story.characters, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public story: Story;

    @OneToMany(type => FrameCharacter, FrameCharacter => FrameCharacter.frame, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frames: FrameCharacter[];
}