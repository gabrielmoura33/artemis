import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateDonnationProps {
  donatorsId: string;
  value: number;
  description: string;
}
@Injectable()
export class DonationsService {
  constructor(private prismaSvc: PrismaService) {}
  create({ value, description, donatorsId }: CreateDonnationProps) {
    return this.prismaSvc.donation.create({
      data: {
        value: value,
        description: description,
        donatorsId: donatorsId,
      },
    });
  }

  findAll() {
    return this.prismaSvc.donation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  remove(id: string) {
    return this.prismaSvc.donation.delete({
      where: { id },
    });
  }

  update(id: string, updateDonationData: CreateDonnationProps) {
    return this.prismaSvc.donation.update({
      where: { id },
      data: updateDonationData,
    });
  }
}
