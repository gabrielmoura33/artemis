import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Injectable()
export class EntriesService {
  constructor(private prismaSvc: PrismaService) {}

  create(createEntryInput: CreateEntryInput) {
    return this.prismaSvc.entry.create({
      data: createEntryInput,
    });
  }

  findAll() {
    return this.prismaSvc.entry.findMany();
  }

  findOne(id: string) {
    return this.prismaSvc.entry.findUnique({
      where: { id },
    });
  }

  findByFirebaseId(firebaseId: string) {
    return this.prismaSvc.entry.findMany({
      where: { firebaseOngId: firebaseId },
    });
  }

  update(id: string, updateEntryInput: UpdateEntryInput) {
    return this.prismaSvc.entry.update({
      where: { id },
      data: updateEntryInput,
    });
  }

  remove(id: string) {
    return this.prismaSvc.entry.delete({
      where: { id },
    });
  }
}
