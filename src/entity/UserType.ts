import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { User } from './User';

@Entity()
export class UserType {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => User, User => User.userType, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public users: User[];
}