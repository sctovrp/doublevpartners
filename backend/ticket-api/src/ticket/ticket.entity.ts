import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    user: string;

    @Column()
    dateCreate: Date;

    @Column()
    dateUpdate: Date;

    @Column()
    status: Boolean;
}