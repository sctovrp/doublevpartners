import { IsBoolean, IsDateString, IsEnum, IsOptional, IsNumber, IsString } from "class-validator";
import { DateModeEnum } from "src/ticket/enums/date-mode.enum";

export class TicketSearchDto {
    @IsOptional()
    @IsString()
    user: string;

    @IsOptional()
    @IsDateString()
    dateCreate: string;

    @IsOptional()
    @IsEnum(DateModeEnum)
    dateCreateMode: DateModeEnum;

    @IsOptional()
    @IsDateString()
    dateUpdate: string;

    @IsOptional()
    @IsEnum(DateModeEnum)
    dateUpdateMode: DateModeEnum;
    
    @IsOptional()
    @IsBoolean()
    status: boolean;

    @IsOptional()
    @IsNumber()
    page: number;

    @IsOptional()
    @IsNumber()
    limit: number;
}

