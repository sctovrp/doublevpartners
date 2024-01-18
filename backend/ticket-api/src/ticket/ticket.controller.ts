import { Controller, Get, Post, Put, Delete, Body, Query } from '@nestjs/common';
import { CreateTicketDto } from './dto/createTicket.dto';
import { TicketDto } from './dto/ticket.dto';
import { TicketService } from './ticket.service';


@Controller('ticket')
export class TicketController {

    constructor(private ticketService: TicketService) {}
    
    @Post()
    async create(@Body() createTicketDto: CreateTicketDto) {
        return await this.ticketService.create(createTicketDto);
    }

    @Get(':id') //get con paginacion // @Get('/articles/:ARTICLE_ID/details')
    async get(
        @Query("id") id: Number,
        @Query("page") page: Number,
        @Query("limit") limit: Number,
    ) {
        this.ticketService.get(id, page, limit);
    }

    @Put()
    async update(@Body() updateTicketDto: TicketDto) {
        this.ticketService.update(updateTicketDto);
    }

    @Delete(':id')
    async delete(
        @Query("id") id: Number,
    ) {
        this.ticketService.delete(id);
    }
}
