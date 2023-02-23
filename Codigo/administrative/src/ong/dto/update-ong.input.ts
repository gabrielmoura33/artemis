import { PartialType } from '@nestjs/mapped-types';
import { CreateOngInput } from './create-ong.input';

export class UpdateOngInput extends PartialType(CreateOngInput) {
  id: string;
}
