import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimalsPhotoEntity {
  @Field()
  url: string;
  @Field()
  id?: string;
  @Field()
  animalId: string | null;
}
