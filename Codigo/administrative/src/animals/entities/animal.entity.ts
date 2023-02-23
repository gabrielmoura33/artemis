import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { Ong } from 'src/ong/entities/ong.entity';
import { AnimalsPhotoEntity } from './animalPhotos.entity';

export enum Gender {
  M = 'M',
  F = 'F',
  U = 'U',
}
registerEnumType(Gender, {
  name: 'Gender',
  description: 'Gender ',
});
@ObjectType()
export class Animal {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  breed?: string;
  @Field()
  gender: Gender;
  @Field()
  birth_date: Date;
  @Field()
  type: string;
  @Field()
  comments: string;
  @Field()
  available_for_adoption?: boolean;
  @Field({ nullable: true })
  clientId?: string;
  @Field()
  ongId: string;
  @Field(() => Client)
  adopted_by: Client;

  @Field(() => Ong)
  ong: Ong;

  @Field(() => [AnimalsPhotoEntity])
  photos: AnimalsPhotoEntity[];
}
