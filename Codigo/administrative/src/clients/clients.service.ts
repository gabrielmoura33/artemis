import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';

@Injectable()
export class ClientsService {
  constructor(private prismaSvc: PrismaService) {}

  create(createClientInput: CreateClientInput) {
    return this.prismaSvc.client.create({
      data: createClientInput,
    });
  }

  findAll() {
    return this.prismaSvc.client.findMany();
  }

  findOne(id: string) {
    return this.prismaSvc.client.findUnique({
      where: { id },
    });
  }

  update(id: string, updateClientInput: UpdateClientInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return `This action removes a #${id} client`;
  }
}
