import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { Client } from './entities/client.entity';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Mutation(() => Client)
  createClient(
    @Args('createClientInput') createClientInput: CreateClientInput,
  ) {
    return this.clientsService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'clients' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.findOne(id);
  }

  @Mutation(() => Client)
  updateClient(
    @Args('updateClientInput') updateClientInput: UpdateClientInput,
  ) {
    return this.clientsService.update(updateClientInput.id, updateClientInput);
  }

  @Mutation(() => Client)
  removeClient(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.remove(id);
  }
}
