import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Button } from './Button';
import { Story } from './Story';

@Entity()
export class PersonalityType {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => Button, Button => Button.personalityType, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public buttons: Button[];

    @ManyToOne(type => Story, Story => Story.personalityTypes, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public story: Story | null;
}