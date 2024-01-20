import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    user: string;

    @Column()
    dateCreate: number;

    @Column()
    dateUpdate: number;

    @Column()
    status: Boolean;
}