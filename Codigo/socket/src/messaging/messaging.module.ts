import { Module } from '@nestjs/common';
import { AppGateway } from 'src/app.gateway';
import { AnimalsController } from './controllers/animals.controller';

@Module({
  controllers: [AnimalsController],
  providers: [AppGateway],
})
export class MessagingModule {}
