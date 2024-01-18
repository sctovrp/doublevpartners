import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';

@InputType()
export class TicketUpdateInput {
  @Field({ description: 'user id' })
  id: number;

  @Field({ description: 'ticket status' })
  status: boolean;
}