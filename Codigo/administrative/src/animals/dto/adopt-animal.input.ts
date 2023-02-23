import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class IAdoptAnimalData {
  @Field()
  clientId: string;
  @Field()
  id: string;
}
