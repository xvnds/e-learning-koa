import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Frame } from './Frame';

@Entity()
export class FrameType {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => Frame, Frame => Frame.frameType, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public frames: Frame[];
}