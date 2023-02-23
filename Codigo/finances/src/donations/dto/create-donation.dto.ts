import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDonationDto {
  @Field()
  value: number;

  @Field()
  description: string;

  @Field()
  donatorsName: string;
}
