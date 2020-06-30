import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Story } from './Story';

@Entity()
export class StoryType {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => Story, Story => Story.storyType, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public stories: Story[];
}