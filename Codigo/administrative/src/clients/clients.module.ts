import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsResolver } from './clients.resolver';
import { ClientsService } from './clients.service';

@Module({
  providers: [ClientsResolver, ClientsService],
  imports: [DatabaseModule],
})
export class ClientsModule {}
