import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateClientInput } from './create-client.input';

@InputType()
export class UpdateClientInput extends PartialType(CreateClientInput) {
  @Field(() => ID)
  id: string;
}
