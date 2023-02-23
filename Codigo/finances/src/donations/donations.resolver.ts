import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { DonatorsService } from 'src/donators/donators.service';
import { Donator } from 'src/donators/entities/donator.entity';
import { FirebaseAuthGuard } from 'src/http/auth/authorization.guard';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Donation } from './entities/donation.entity';
@Resolver(() => Donation)
export class DonationsResolver {
  constructor(
    private readonly donationsService: DonationsService,
    private readonly donatorsService: DonatorsService,
  ) {}

  @Query(() => [Donation])
  // @UseGuards(FirebaseAuthGuard)
  async donations() {
    return this.donationsService.findAll();
  }

  @ResolveField(() => Donator)
  donator(@Parent() donation: Donation) {
    return this.donatorsService.findDonatorById(donation.donatorsId);
  }

  @Mutation(() => Donation)
  async createDonnation(@Args('data') data: CreateDonationDto) {
    let donator = await this.donatorsService.findDonatorByName(
      data.donatorsName,
    );

    if (!donator) {
      donator = await this.donatorsService.create({
        name: data.donatorsName,
      });
    }

    return this.donationsService.create({
      value: data.value,
      description: data.description,
      donatorsId: donator.id,
    });
  }

  @Mutation(() => Donation)
  @UseGuards(FirebaseAuthGuard)
  async updateDonation(
    @Args('updateAnimalInput') updateDonationInput: UpdateDonationDto,
  ) {
    let donator = await this.donatorsService.findDonatorByName(
      updateDonationInput.donatorsName,
    );

    if (!donator) {
      donator = await this.donatorsService.create({
        name: updateDonationInput.donatorsName,
      });
    }
    return this.donationsService.update(updateDonationInput.id, {
      description: updateDonationInput.description,
      donatorsId: donator.id,
      value: updateDonationInput.value,
    });
  }

  @Mutation(() => Donation)
  removeDonation(@Args('id', { type: () => String }) id: string) {
    return this.donationsService.remove(id);
  }
}
