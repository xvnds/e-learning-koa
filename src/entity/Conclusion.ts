import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { Frame } from './Frame';
import { Story } from './Story';

@Entity()
export class Conclusion {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false, type: 'text' })
    public text: string;

    @Column({ nullable: true, type: 'integer' })
    public perfectScore: number | null;

    @ManyToOne(type => Story, Story => Story.conclusions, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public story: Story | null;

    @OneToMany(type => Frame, Frame => Frame.conclusion, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public fromFrames: Frame[];
}