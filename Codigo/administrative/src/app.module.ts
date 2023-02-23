import { Module } from '@nestjs/common';
import { AnimalsModule } from './animals/animals.module';
import { ClientsModule } from './clients/clients.module';
import { DatabaseModule } from './database/database.module';
import { FirebaseSingletonService } from './http/firebase/firebase.service';
import { HttpModule } from './http/http.module';
import { OngModule } from './ong/ong.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    OngModule,
    HttpModule,
    AnimalsModule,
    ClientsModule,
    UsersModule,
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
