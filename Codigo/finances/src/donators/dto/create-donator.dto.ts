enum GenderProps {
  F = 'F',
  M = 'M',
  ND = 'ND',
}
export class CreateDonatorDto {
  name: string;
  cpf?: string;
  age?: number;
  gender: GenderProps;
}
