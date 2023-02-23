import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ong {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  firebaseId: string;

  @Field()
  whatsapp: string;

  @Field()
  email: string;

  @Field()
  city: string;

  @Field()
  region: string;
}
