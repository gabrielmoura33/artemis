import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DonationsModule } from './donations/donations.module';
import { DonatorsModule } from './donators/donators.module';
import { EntriesModule } from './entries/entries.module';
import { FirebaseSingletonService } from './http/firebase/firebase.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    DatabaseModule,
    SharedModule,
    DonationsModule,
    DonatorsModule,
    EntriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    this.InitAuthService();
  }

  async InitAuthService() {
    const FirebaseService = FirebaseSingletonService.getInstance();
    FirebaseService.init();
  }
}
