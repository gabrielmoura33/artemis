import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateONGParams {
  name: string;
  email: string;
  firebaseId: string;
  whatsapp: string;
  city?: string;
  region?: string;
}
@Injectable()
export class OngService {
  constructor(private prismaSvc: PrismaService) {}
  create({ name, email, firebaseId, whatsapp, city, region }: CreateONGParams) {
    return this.prismaSvc.ong.create({
      data: { name, email, firebaseId, whatsapp, city, region },
    });
  }

  findAll() {
    return this.prismaSvc.ong.findMany();
  }

  findOne(id: string) {
    return this.prismaSvc.ong.findUnique({
      where: { id },
    });
  }

  findByFirebaseId(firebaseId: string) {
    return this.prismaSvc.ong.findUnique({
      where: {
        firebaseId,
      },
    });
  }

  // update(id: string, updateOngInput: UpdateOngInput) {
  //   return '';
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} ong`;
  // }
}
