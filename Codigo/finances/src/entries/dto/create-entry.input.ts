import { Field, InputType } from '@nestjs/graphql';
import { EntryType } from '../entities/entry.entity';

@InputType()
export class CreateEntryInput {
  @Field()
  type: EntryType;

  @Field()
  firebaseOngId: string;

  @Field()
  description?: string;

  @Field()
  value: number;

  @Field({ nullable: true })
  date?: Date;
}
