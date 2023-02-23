import { Field, InputType } from '@nestjs/graphql';
import { Gender } from 'src/animals/entities/animal.entity';

@InputType()
export class CreateClientInput {
  @Field()
  name: string;
  @Field()
  age?: number;
  @Field()
  cpf?: string;
  @Field()
  gender?: Gender;
}
