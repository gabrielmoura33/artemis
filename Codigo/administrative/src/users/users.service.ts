import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prismaSvc: PrismaService) {}
  create(createUserInput: CreateUserInput, firebaseOngId: string) {
    return this.prismaSvc.user.create({
      data: { ...createUserInput, firebaseOngId },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return this.prismaSvc.user.findUnique({
      where: { id },
    });
  }

  findOneInOng(email: string, ongId: string) {
    return this.prismaSvc.user.findFirst({
      where: {
        email,
        ongId,
      },
    });
  }

  findAllByOngId(ongId: string) {
    return this.prismaSvc.user.findMany({
      where: {
        ongId,
      },
    });
  }

  findByAuthId(authId) {
    return this.prismaSvc.user.findUnique({
      where: {
        firebaseId: authId,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
