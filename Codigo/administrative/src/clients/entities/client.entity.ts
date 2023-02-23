import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Gender } from 'src/animals/entities/animal.entity';

registerEnumType(Gender, {
  name: 'Gender',
  description: 'Gender ',
});
@ObjectType()
export class Client {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  age?: number;
  @Field()
  cpf?: string;
  @Field()
  gender: Gender;
}
