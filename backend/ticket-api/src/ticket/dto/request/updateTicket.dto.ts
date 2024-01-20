import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateTicketDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;
}
