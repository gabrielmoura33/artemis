import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DonatorsService } from './donators.service';

@Module({
  // controllers: [DonatorsResolver],
  providers: [DonatorsService],
  imports: [DatabaseModule],
})
export class DonatorsModule {}
