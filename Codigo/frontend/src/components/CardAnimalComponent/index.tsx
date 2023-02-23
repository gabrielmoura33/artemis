import Image from 'next/image';
import React, { useState } from 'react';
// import { Container } from './styles';
import editIcon from '../../assets/icons/edit-24.svg';
import trashIcon from '../../assets/icons/trash-24.svg';
import { calculateDiferenceInYears } from '../../utils/calculateInYears';

export interface Animal {
  breed: string;
  gender: string;
  name: string;
  comments: string;
  available_for_adoption: boolean;
  birth_date: string;
  type: string;
}

export interface CardAnimalProps {
  animal: Animal;
  id: number;
  setModalVisible: () => void;
}
const AnimalsFieldMap = {
  available: 'Disponįvel',
  unavailable: 'Adotado',
};

const AnimalsType = {
  DOG: 'Cachorro',
  CAT: 'Gato',
  dog: 'Cachorro',
  cat: 'Gato',
};

const DonationStatusClassMap = {
  available: 'progress',
  unavailable: 'done',
};

function CardAnimalComponent({
  animal,
  id,
  setModalVisible,
  ...rest
}: CardAnimalProps) {
  const [status] = useState(
    AnimalsFieldMap[animal.available_for_adoption ? 'available' : 'unavailable']
  );

  const statusClass =
    DonationStatusClassMap[
      animal.available_for_adoption ? 'available' : 'unavailable'
    ];

  const differenceInMonthsOrYears = calculateDiferenceInYears(
    animal.birth_date
  );
  // const valueInBRL = String(value).tolocaleString

  return (
    <div className={`card-animal ${statusClass}`} {...rest}>
      <div className="id column">{id + 1}</div>
      <div className="donators column">
        <span>{animal?.name}</span>
        <strong>{animal.comments}</strong>
      </div>
      <div className="amount column">
        <span>Tipo</span>
        <p>{AnimalsType[animal.type as typeof AnimalsType]}</p>
      </div>
      <div className="amount column">
        <span>Raça</span>
        <p>{animal.breed}</p>
      </div>
      <div className="deadline column">
        <span>Data de Nascimento</span>
        <p>{differenceInMonthsOrYears}</p>
      </div>

      <div className="status  badge column">
        <strong>{status}</strong>
      </div>
      <div className="actions column flex">
        <a href="" className="btn white edit" title="Editar doação">
          <Image src={editIcon} alt="Editar doação" />
        </a>
        <button
          className="delete btn white"
          title="Excluir doação"
          type="button"
          onClick={() => setModalVisible()}
        >
          <Image src={trashIcon} alt="Excluir doação" />
        </button>
      </div>
    </div>
  );
}

export default CardAnimalComponent;
