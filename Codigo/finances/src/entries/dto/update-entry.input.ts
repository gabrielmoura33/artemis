import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateEntryInput } from './create-entry.input';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @Field(() => String)
  id: string;
}
