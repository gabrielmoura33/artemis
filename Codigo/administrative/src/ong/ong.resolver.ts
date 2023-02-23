import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { CreateOngInput } from './dto/create-ong.input';
import { Ong } from './entities/ong.entity';
import { OngService } from './ong.service';

@Resolver('Ong')
export class OngResolver {
  constructor(private readonly ongService: OngService) {}

  @Mutation(() => Ong)
  @UseGuards(FirebaseAuthGuard)
  createOng(
    @Args('createOngInput') createOngInput: CreateOngInput,
    @CurrentUser() ong: AuthUser,
  ) {
    const firebaseId = ong.sub;
    return this.ongService.create({ ...createOngInput, firebaseId });
  }

  @Query(() => [Ong])
  async ongs() {
    const data = await this.ongService.findAll();

    return data;
  }

  @Query(() => Ong)
  @UseGuards(FirebaseAuthGuard)
  me(@CurrentUser() ong: AuthUser) {
    const { sub: firebaseId } = ong;
    return this.ongService.findByFirebaseId(firebaseId);
  }

  // @Mutation('updateOng')
  // update(@Args('updateOngInput') updateOngInput: UpdateOngInput) {
  //   return this.ongService.update(updateOngInput.id, updateOngInput);
  // }

  // @Mutation('removeOng')
  // remove(@Args('id') id: string) {
  //   return this.ongService.remove(id);
  // }
}
