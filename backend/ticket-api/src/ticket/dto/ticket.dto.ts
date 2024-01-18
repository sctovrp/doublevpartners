import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TicketDto {
    @IsNotEmpty()
    @IsNumber()
    id: Number;

    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsDateString()
    dateCreate: Date;
    
    @IsNotEmpty()
    @IsDateString()
    dateUpdate: Date;

    @IsNotEmpty()
    @IsBoolean()
    status: Boolean;
}
