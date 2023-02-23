import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Donator {
  @Field(() => ID)
  id: string;

  @Field()
  name?: string;

  @Field()
  cpf?: string;

  @Field()
  age?: number;
}
