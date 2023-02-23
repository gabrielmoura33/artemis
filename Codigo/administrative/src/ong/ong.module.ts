import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OngResolver } from './ong.resolver';
import { OngService } from './ong.service';

@Module({
  providers: [OngResolver, OngService],
  imports: [DatabaseModule],
})
export class OngModule {}
