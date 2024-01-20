import { ObjectType, Field, Int,  } from '@nestjs/graphql';

@ObjectType()
export class TicketModel {
  @Field(() => Int, { description: 'ticket id' })
  id: number;

  @Field({ description: 'ticket user associated' })
  user: string;

  @Field({ description: 'ticket creation date' })
  dateCreate: string;

  @Field({ description: 'ticket update date' })
  dateUpdate: string;

  @Field({ description: 'ticket status' })
  status: boolean;
}
