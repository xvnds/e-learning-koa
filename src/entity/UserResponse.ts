import {Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from './User';
import { Button } from './Button';
import { Frame } from './Frame';
import { Story } from './Story';

@Entity()
export class UserResponse {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(type => User, User => User.responses, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public user: User | null;

    @ManyToOne(type => Story, Story => Story.userResponses, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public story: Story | null;

    @ManyToOne(type => Frame, Frame => Frame.userResponses, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public frame: Frame | null;

    @ManyToOne(type => Button, Button => Button.userResponses, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public button: Button | null;
}