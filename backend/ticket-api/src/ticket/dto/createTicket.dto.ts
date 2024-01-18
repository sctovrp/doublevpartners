import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDto {
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

