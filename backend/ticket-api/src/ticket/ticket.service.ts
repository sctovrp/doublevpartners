import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/request/createTicket.dto';
import { TicketDto } from './dto/response/ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { Like, Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { UpdateTicketDto } from './dto/request/updateTicket.dto';
import { TicketSearchDto } from './dto/request/ticket-search.dto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}
  async create(createTicket: CreateTicketDto) {
    try {
      const localTicket = new Ticket();

      localTicket.user = createTicket.user;
      localTicket.dateCreate = dayjs().unix();
      localTicket.dateUpdate = dayjs().unix();
      localTicket.status = createTicket.status;

      return await this.ticketRepository.save(localTicket);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
  async get(params: TicketSearchDto) {
    try {
      let query = this.ticketRepository.createQueryBuilder('tickets');

      const searchSymbols = {
        GT: '>',
        LT: '<',
        EQ: '=',
      };

      const datesFilter = {
        dateCreate: {
          date: params.dateCreate,
          mode: params.dateCreateMode,
        },
        dateUpdate: {
          date: params.dateUpdate,
          mode: params.dateUpdateMode,
        },
      };

      const paramsFilter = {
        user: params.user,
        status: params.status,
      };

      Object.keys(paramsFilter).forEach((key) => {
        if (paramsFilter[key] === undefined || paramsFilter[key] === null)
          return;
        query = query.where(`tickets.${key} = :value`, { value: params[key] });
      });

      Object.keys(datesFilter).forEach((key) => {
        if (
          datesFilter[key].date === undefined ||
          datesFilter[key].date === null
        )
          return;
        if (
          datesFilter[key].mode === undefined ||
          datesFilter[key].mode === null
        )
          return;
        query = query.where(
          `tickets.${key} ${searchSymbols[datesFilter[key].mode]} :value`,
          { value: dayjs(datesFilter[key].date).unix() },
        );
      });

      query = query.limit(params.limit).offset(params.page);

      const queryResult = await query.getManyAndCount();
      return {
        tickets: queryResult[0],
        count: queryResult[1],
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async update(ticket: UpdateTicketDto) {
    try {
      const ticketToUpdate = await this.ticketRepository.findOneByOrFail({
        id: ticket.id,
      });

      ticketToUpdate.dateUpdate = dayjs().unix();
      ticketToUpdate.status = ticket.status;

      return await this.ticketRepository.save(ticketToUpdate);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async delete(idTicket: number) {
    try {
      const ticketToRemove = await this.ticketRepository.findOneByOrFail({
        id: idTicket,
      });
      
      await this.ticketRepository.remove(ticketToRemove);

      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
