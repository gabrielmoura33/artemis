import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  birth_date: Date;

  @Field({ nullable: true })
  cpf?: string;

  @Field()
  ongId: string;

  @Field()
  firebaseId: string;
}
