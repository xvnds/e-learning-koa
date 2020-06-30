import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Button } from './Button';
import { Frame } from './Frame';

@Entity()
export class ButtonType {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => Button, Button => Button.buttonType, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public buttons: Button[];
}