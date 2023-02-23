import { Module } from '@nestjs/common';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [MessagingModule],
  controllers: [],
})
export class AppModule {}
