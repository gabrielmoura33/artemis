import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { EntriesResolver } from './entries.resolver';
import { EntriesService } from './entries.service';

@Module({
  providers: [EntriesResolver, EntriesService, PrismaService],
})
export class EntriesModule {}
