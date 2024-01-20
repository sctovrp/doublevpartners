import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { TicketResolver } from './graphql/resolver/ticket.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers: [TicketController],
    providers: [TicketService, TicketResolver]
})
export class TicketModule {}
