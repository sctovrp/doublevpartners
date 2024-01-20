import { Controller, Get, Post, Put, Delete, Body, Query, Req } from '@nestjs/common';
import { CreateTicketDto } from './dto/request/createTicket.dto';
import { TicketDto } from './dto/response/ticket.dto';
import { TicketService } from './ticket.service';
import { UpdateTicketDto } from './dto/request/updateTicket.dto';
import { TicketSearchDto } from './dto/request/ticket-search.dto'; 
import * as dayjs from "dayjs";


@Controller('ticket')
export class TicketController {

    constructor(private ticketService: TicketService) {}
    
    @Post()
    async create(@Body() createTicketDto: CreateTicketDto) {
        return await this.ticketService.create(createTicketDto);
    }

    @Get()
    async get(@Req() request) {
        return await this.ticketService.get(request.query as TicketSearchDto);
    }

    @Put()
    async update(@Body() updateTicketDto: UpdateTicketDto) {
        return await this.ticketService.update(updateTicketDto);
    }

    @Delete()
    async delete(
        @Query("id") id: number,
    ) {
        return await this.ticketService.delete(id);
    }
}
