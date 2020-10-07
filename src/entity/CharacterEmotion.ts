import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Character } from './Character';
import { FrameCharacter } from './FrameCharacter';

@Entity()
export class CharacterEmotion {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public url: string;

    @ManyToOne(type => Character, Character => Character.emotions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public character: Character;

    @OneToMany(type => FrameCharacter, FrameCharacter => FrameCharacter.emotion, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frames: FrameCharacter[];
}