import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Donator } from 'src/donators/entities/donator.entity';

enum DonationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(DonationStatus, {
  name: 'DonationStatus',
  description: 'Available donation status',
});
@ObjectType()
export class Donation {
  @Field(() => ID)
  id: string;

  @Field(() => DonationStatus)
  status: DonationStatus;

  @Field()
  value: number;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field(() => [Donator])
  donators: Donator[];

  donatorsId: string;
}
