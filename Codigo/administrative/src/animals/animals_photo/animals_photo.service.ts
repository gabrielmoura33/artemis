import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AnimalsPhotoService {
  constructor(private prismaSvc: PrismaService) {}

  async findByAnimalId(animalId: string) {
    const animalPhotos = await this.prismaSvc.animalPhoto.findMany({
      where: {
        animalId,
      },
    });

    return animalPhotos;
  }
}
