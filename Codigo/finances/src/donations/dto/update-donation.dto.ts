import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDonationDto } from './create-donation.dto';

@InputType()
export class UpdateDonationDto extends PartialType(CreateDonationDto) {
  @Field()
  id: string;
}
