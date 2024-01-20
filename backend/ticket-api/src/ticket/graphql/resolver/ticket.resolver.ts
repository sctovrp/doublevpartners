import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TicketModel } from '../model/ticket.model';
import { TicketService } from 'src/ticket/ticket.service';
import { Ticket } from 'src/ticket/ticket.entity';
import { CreateTicketInput } from '../inputs/create-ticket.input';
import { TicketSearchInput } from '../inputs/ticket-search.input';
import { TicketUpdateInput } from '../inputs/update-ticket.input';
import { SearchTicketModel } from '../model/search-ticket.model';


@Resolver(() => TicketModel)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Mutation(() => TicketModel)
  async createTicket(@Args('createTicketInput') createTicketInput: CreateTicketInput) {
    return await this.ticketService.create(createTicketInput);
  }

  @Query(() => SearchTicketModel, { name: 'getTickets' })
  async getTicket(@Args('ticketSearchInput') ticketSearchInput: TicketSearchInput) {
    return await this.ticketService.get(ticketSearchInput);
  }

  @Mutation(() => TicketModel)
  async updateTicket(@Args('ticketUpdateInput') ticketUpdateInput: TicketUpdateInput) {
    return await this.ticketService.update(ticketUpdateInput);
  }

  @Mutation(() => Boolean)
  async removeTicket(@Args('id', { type: () => Int }) id: number) {
    return await this.ticketService.delete(id);
  }
}
