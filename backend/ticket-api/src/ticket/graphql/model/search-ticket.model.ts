import { ObjectType, Field, Int,  } from '@nestjs/graphql';
import { TicketModel } from './ticket.model';

@ObjectType()
export class SearchTicketModel {
  @Field(() => [TicketModel], { description: 'ticket list' })
  tickets: TicketModel;

  @Field(() => Int, { description: 'ticket count' })
  count: number;
}

