import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/createTicket.dto';
import { TicketDto } from './dto/ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>
    ){}
    async create(createTicket: CreateTicketDto){
        // call to bd
        const localTicket = new Ticket();

        localTicket.user = createTicket.user;
        localTicket.dateCreate = createTicket.dateCreate;
        localTicket.dateUpdate = createTicket.dateUpdate;
        localTicket.status = createTicket.status;

        return await this.ticketRepository.save(localTicket);
    }
    async get(idTicket: Number, pageTicket: Number, limitTicket: Number){
        // call to bd
        // pagination
        return this.ticketRepository.findOneByOrFail({
            id: idTicket,
        })
    }

    async update(ticket: TicketDto){
        const ticketToUpdate = await this.ticketRepository.findOneByOrFail({
            id: ticket.id
        });
        
        ticketToUpdate.dateUpdate = ticket.dateUpdate;
        ticketToUpdate.status = ticket.status;

        return await this.ticketRepository.save(ticketToUpdate);
    }

    async delete(idTicket: Number){
        const ticketToRemove = await this.ticketRepository.findOneByOrFail({
            id: idTicket
        })

        return this.ticketRepository.remove(ticketToRemove);
    }
}
