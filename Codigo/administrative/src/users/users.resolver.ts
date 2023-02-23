import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FirebaseAuthGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { OngService } from 'src/ong/ong.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly ongService: OngService,
  ) {}

  @Mutation(() => User)
  @UseGuards(FirebaseAuthGuard)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @CurrentUser() ong: AuthUser,
  ) {
    const ongDB = await this.ongService.findByFirebaseId(ong.sub);

    if (!ongDB) throw new Error('Ong Not found');

    const userExists = await this.usersService.findOneInOng(
      createUserInput.email,
      ongDB.id,
    );

    if (userExists) throw new Error('User Already Exists!');

    return this.usersService.create(
      {
        ...createUserInput,
        ongId: ongDB.id,
      },
      ong.sub,
    );
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
