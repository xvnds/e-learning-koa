import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Frame } from './Frame';

@Entity()
export class FrameBG {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public uri: string;

    @Column()
    public type: string;

    @ManyToOne(type => Frame, Frame => Frame.backgrounds, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frame: Frame | null;
}