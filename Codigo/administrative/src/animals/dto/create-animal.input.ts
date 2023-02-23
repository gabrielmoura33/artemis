import { Field, InputType } from '@nestjs/graphql';
import { Gender } from '../entities/animal.entity';

@InputType()
export class AnimalsPhotoInput {
  @Field()
  url: string;

  id?: string;

  animalId: string | null;
}
@InputType()
export class CreateAnimalInput {
  @Field()
  name: string;

  @Field()
  breed?: string;

  @Field()
  gender: Gender;

  @Field()
  birth_date: Date;

  @Field()
  type: string;

  @Field()
  comments: string;

  @Field({ defaultValue: true })
  available_for_adoption?: boolean;

  @Field({ nullable: true })
  clientId?: string;

  @Field({ nullable: true })
  ongId: string;

  @Field(() => [AnimalsPhotoInput], { nullable: true })
  photos?: AnimalsPhotoInput[];

  avatar_url?: string;
}
