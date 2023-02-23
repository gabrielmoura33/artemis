import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { DonatorsService } from 'src/donators/donators.service';
import { DonationsResolver } from './donations.resolver';
import { DonationsService } from './donations.service';

@Module({
  providers: [
    DonationsService,
    DonationsResolver,
    DonatorsService,

    ConfigService,
  ],
  imports: [DatabaseModule],
})
export class DonationsModule {}
