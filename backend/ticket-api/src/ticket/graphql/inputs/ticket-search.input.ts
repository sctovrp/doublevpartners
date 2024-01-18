import { InputType, Int, Field, registerEnumType } from '@nestjs/graphql';
import { DateModeEnum } from 'src/ticket/enums/date-mode.enum';

registerEnumType(DateModeEnum, {name: "DateModeEnum"})

@InputType()
export class TicketSearchInput {
  @Field({ description: 'user id', nullable: true })
  user: string;

  @Field({ description: 'ticket dateCreate', nullable: true })
  dateCreate: string;

  @Field(() => DateModeEnum, { description: 'ticket dateCreateMode', nullable: true })
  dateCreateMode: DateModeEnum;
  
  @Field({ description: 'ticket dateUpdate', nullable: true })
  dateUpdate: string;

  @Field(() => DateModeEnum, { description: 'ticket dateUpdateMode', nullable: true })
  dateUpdateMode: DateModeEnum;

  @Field({ description: 'ticket status', nullable: true })
  status: boolean;

  @Field({ description: 'query page', nullable: true })
  page: number;

  @Field({ description: 'query limit', nullable: true })
  limit: number;
}
