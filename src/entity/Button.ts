import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { ButtonType } from './ButtonType';
import { Frame } from './Frame';
import { UserResponse } from './UserResponse';
import { PersonalityType } from './PersonalityType';

@Entity()
export class Button {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: false, type: 'text' })
    public text: string;

    @Column({ nullable: false, type: 'decimal' })
    public score: number;

    @ManyToOne(type => Frame, Frame => Frame.fromButton)
    public destination: Frame | null;

    @ManyToOne(type => Frame, Frame => Frame.buttons, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public frame: Frame | null;

    @ManyToOne(type => PersonalityType, PersonalityType => PersonalityType.buttons, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    public personalityType: PersonalityType | null;

    @ManyToOne(type => ButtonType, ButtonType => ButtonType.buttons, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public buttonType: ButtonType | null;

    @OneToMany(type => UserResponse, UserResponse => UserResponse.button, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    })
    public userResponses: UserResponse[];
}