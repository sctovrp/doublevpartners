import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TicketDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsDateString()
    dateCreate: string;
    
    @IsNotEmpty()
    @IsDateString()
    dateUpdate: string;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}
