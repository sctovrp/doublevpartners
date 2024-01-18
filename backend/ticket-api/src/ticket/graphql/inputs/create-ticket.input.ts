import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field({ description: 'user id on ticket' })
  user: string;

  @Field({ description: 'ticket status' })
  status: boolean;
}
