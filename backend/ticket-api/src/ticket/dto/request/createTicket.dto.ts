import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDto {
    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}

