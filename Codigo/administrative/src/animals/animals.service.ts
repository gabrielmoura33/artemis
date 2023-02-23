import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateAnimalInput } from './dto/create-animal.input';
import { UpdateAnimalInput } from './dto/update-animal.input';

@Injectable()
export class AnimalsService {
  constructor(private prismaSvc: PrismaService) {}
  create({ photos, ...createAnimalInput }: CreateAnimalInput) {
    return this.prismaSvc.animal.create({
      data: { ...createAnimalInput, photos: { create: photos } },
    });
  }

  findAll() {
    return this.prismaSvc.animal.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findAvailables() {
    return this.prismaSvc.animal.findMany({
      where: {
        available_for_adoption: true,
      },
    });
  }

  findByName(name: string) {
    return this.prismaSvc.animal.findUnique({
      where: { name },
    });
  }
  findOne(id: string) {
    return this.prismaSvc.animal.findUnique({
      where: { id },
    });
  }

  findByOngAndId(name: string, ongId: string) {
    return this.prismaSvc.animal.findFirst({
      where: { name, ongId },
    });
  }

  update(id: string, { photos, ...updateAnimalInput }: UpdateAnimalInput) {
    return this.prismaSvc.animal.update({
      where: { id },
      data: {
        ...updateAnimalInput,
      },
    });
  }

  remove(id: string) {
    return this.prismaSvc.animal.delete({
      where: { id },
    });
  }

  updateAnimalAdoptionStatus(clientId: string, animalId: string) {
    return this.prismaSvc.animal.update({
      where: { id: animalId },
      data: {
        available_for_adoption: false,
        clientId: clientId,
      },
    });
  }
}
