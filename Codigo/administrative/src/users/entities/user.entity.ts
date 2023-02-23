import { Field, ObjectType } from '@nestjs/graphql';
import { Animal } from 'src/animals/entities/animal.entity';
import { Ong } from 'src/ong/entities/ong.entity';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field()
  firebaseId: string;
  @Field()
  firebaseOngId: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  birth_date: Date;
  @Field()
  cpf?: string;

  ongId?: string;

  //Relations
  @Field(() => [Animal])
  Animal: Animal[];

  @Field(() => Ong)
  work_on?: Ong;
}
