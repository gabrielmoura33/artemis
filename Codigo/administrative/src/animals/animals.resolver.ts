import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { FirebaseAuthGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { KafkaService } from 'src/messaging/kafka.service';
import { Ong } from 'src/ong/entities/ong.entity';
import { OngService } from 'src/ong/ong.service';
import { UsersService } from 'src/users/users.service';
import { AnimalsService } from './animals.service';
import { AnimalsPhotoService } from './animals_photo/animals_photo.service';
import { IAdoptAnimalData } from './dto/adopt-animal.input';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';
import { Animal } from './entities/animal.entity';
import { AnimalsPhotoEntity } from './entities/animalPhotos.entity';

@Resolver(() => Animal)
export class AnimalsResolver {
  constructor(
    private readonly animalsService: AnimalsService,
    private readonly animalsPhotoService: AnimalsPhotoService,
    private readonly kafkaService: KafkaService,
    private readonly clientsService: ClientsService,
    private readonly usersService: UsersService,
    private readonly ongService: OngService,
  ) {}

  @Mutation(() => Animal)
  @UseGuards(FirebaseAuthGuard)
  async createAnimal(
    @Args('createAnimalInput') createAnimalInput: CreateAnimalInput,
    @CurrentUser() user: AuthUser,
  ) {
    // const userDB = await this.usersService.findByAuthId(user.sub);

    // if (!userDB) throw new Error('Usuário nao encontrado');

    const ong = await this.ongService.findByFirebaseId(user.sub);

    if (!ong) {
      throw new Error('ONG não encontrada!');
    }

    const animalExists = await this.animalsService.findByOngAndId(
      createAnimalInput.name,
      ong.id,
    );

    if (animalExists) throw new Error('Animal already exists');

    const animal = await this.animalsService.create({
      ...createAnimalInput,
      ongId: ong.id,
    });

    if (animal.available_for_adoption) {
      this.kafkaService.emit('artemis.administrative.new-animal', {
        animal: animal,
        user: {
          id: ong.id,
          firebaseId: ong.firebaseId,
          ongAuthId: ong.firebaseId,
        },
      });
    }
    return animal;
  }

  @Query(() => [Animal], { name: 'animals' })
  @UseGuards(FirebaseAuthGuard)
  async findAll() {
    const animals = await this.animalsService.findAll();

    return animals;
  }

  @Query(() => [Animal], { name: 'animals_availables' })
  async findAvailables() {
    const animals = await this.animalsService.findAvailables();

    return animals;
  }
  @Query(() => Animal, { name: 'animal' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.animalsService.findOne(id);
  }

  @Mutation(() => Animal)
  @UseGuards(FirebaseAuthGuard)
  async updateAnimal(
    @Args('updateAnimalInput') updateAnimalInput: UpdateAnimalInput,
    @CurrentUser() user: AuthUser,
  ) {
    // const userDB = await this.usersService.findByAuthId(user.sub);

    // if (!userDB) throw new Error('Usuário nao encontrado');

    const ong = await this.ongService.findByFirebaseId(user.sub);

    if (!ong) {
      throw new Error('ONG não encontrada!');
    }

    const animalExists = await this.animalsService.findByOngAndId(
      updateAnimalInput.name,
      ong.id,
    );

    if (animalExists) throw new Error('Animal already exists');

    const animal = await this.animalsService.update(
      updateAnimalInput.id,
      updateAnimalInput,
    );

    this.kafkaService.emit('artemis.administrative.update-animal', {
      animal: animal,
      user: {
        id: ong.id,
        firebaseId: ong.firebaseId,
        ongAuthId: ong.firebaseId,
      },
    });

    return animal;
  }

  @Mutation(() => Animal)
  removeAnimal(@Args('id', { type: () => String }) id: string) {
    const animal = this.animalsService.remove(id);
    this.kafkaService.emit('artemis.administrative.remove-animal', {});
    return animal;
  }

  @Mutation(() => Animal)
  async adoptAnimal(@Args('data') { clientId, id }: IAdoptAnimalData) {
    return this.animalsService.updateAnimalAdoptionStatus(clientId, id);
  }

  @ResolveField(() => Client)
  adopted_by(@Parent() animal: Animal) {
    return this.clientsService.findOne(animal.clientId);
  }
  @ResolveField(() => Ong)
  ong(@Parent() animal: Animal) {
    return this.ongService.findOne(animal.ongId);
  }

  @ResolveField(() => [AnimalsPhotoEntity], { nullable: true })
  photos(@Parent() animal: Animal) {
    return this.animalsPhotoService.findByAnimalId(animal.id);
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ) {
    console.log(filename);
  }
}
