import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOngInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  whatsapp: string;

  @Field()
  city?: string;

  @Field()
  region?: string;
}
