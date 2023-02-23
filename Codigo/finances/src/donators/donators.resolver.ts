import { Resolver } from '@nestjs/graphql';
import { DonatorsService } from './donators.service';
import { Donator } from './entities/donator.entity';

@Resolver(() => Donator)
export class DonatorsResolver {
  constructor(private readonly donatorsService: DonatorsService) {}
}
