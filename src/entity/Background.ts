import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Frame } from './Frame';

@Entity()
export class Background {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false, type: 'text' })
    public name: string;

    @Column({ nullable: false, type: 'text' })
    public url: string;

    @OneToMany(type => Frame, Frame => Frame.background, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frames: Frame[];
}