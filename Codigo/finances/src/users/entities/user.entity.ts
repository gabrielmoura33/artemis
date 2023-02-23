import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firebaseId: string;

  @Field()
  firebaseOngId: string;

  @Field()
  birth_date: Date;

  @Field()
  name?: string;

  @Field()
  cpf?: string;

  @Field()
  age?: number;
}
