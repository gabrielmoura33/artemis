import { Module } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { DatabaseModule } from 'src/database/database.module';
import { MessagingModule } from 'src/messaging/messaging.module';
import { OngService } from 'src/ong/ong.service';
import { UsersService } from 'src/users/users.service';
import { AnimalsResolver } from './animals.resolver';
import { AnimalsService } from './animals.service';
import { AnimalsPhotoService } from './animals_photo/animals_photo.service';

@Module({
  providers: [
    AnimalsResolver,
    AnimalsService,
    ClientsService,
    UsersService,
    OngService,
    AnimalsPhotoService,
  ],
  imports: [DatabaseModule, MessagingModule],
})
export class AnimalsModule {}
