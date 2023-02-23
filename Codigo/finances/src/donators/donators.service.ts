import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateDonatorsProps {
  name: string;
}
@Injectable()
export class DonatorsService {
  constructor(private prismaSvc: PrismaService) {}

  findDonatorById(id: string) {
    return this.prismaSvc.donators.findUnique({
      where: {
        id,
      },
    });
  }

  findDonatorByName(name: string) {
    return this.prismaSvc.donators.findFirst({
      where: {
        name: name,
      },
    });
  }

  create({ name }: CreateDonatorsProps) {
    return this.prismaSvc.donators.create({
      data: {
        name,
      },
    });
  }
}
