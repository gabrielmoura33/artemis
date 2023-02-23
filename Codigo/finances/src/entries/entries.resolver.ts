import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';
import { EntriesService } from './entries.service';

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(private readonly entriesService: EntriesService) {}

  @Mutation(() => Entry)
  createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput) {
    return this.entriesService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entries' })
  findAll() {
    return this.entriesService.findAll();
  }

  @Query(() => [Entry], { name: 'entry' })
  async findByFirebaseId(
    @Args('firebaseID', { type: () => String }) firebaseID: string,
  ) {
    const entries = await this.entriesService.findByFirebaseId(firebaseID);

    return entries;
  }

  @Mutation(() => Entry)
  updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entriesService.update(updateEntryInput.id, updateEntryInput);
  }

  @Mutation(() => Entry)
  removeEntry(@Args('id', { type: () => String }) id: string) {
    return this.entriesService.remove(id);
  }
}
