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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public user: User | null;

    @ManyToOne(type => Story, Story => Story.userResponses, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public story: Story | null;

    @ManyToOne(type => Frame, Frame => Frame.userResponses, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frame: Frame | null;

    @ManyToOne(type => Button, Button => Button.userResponses, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public button: Button | null;
}