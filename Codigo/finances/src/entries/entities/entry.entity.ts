import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum EntryType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}
registerEnumType(EntryType, {
  name: 'EntryType',
  description: 'Type of the entry',
});
@ObjectType()
export class Entry {
  @Field(() => ID)
  id: string;

  @Field()
  type: EntryType;

  @Field()
  firebaseOngId: string;

  @Field()
  description?: string;

  @Field()
  date: Date;

  @Field()
  value: number;
}
