import Image from 'next/image';
import React, { useState } from 'react';
// import { Container } from './styles';
import editIcon from '../../assets/icons/edit-24.svg';
import trashIcon from '../../assets/icons/trash-24.svg';
import { CountDaysFromDate } from '../../utils/countDaysFromDate';

interface CardDonationProps {
  id: number;

  type: 'INCOME' | 'OUTCOME';

  description?: string;

  date: string;

  value: number;

  setModalVisible: () => void;
}
const EntryType = {
  INCOME: 'Entrada',
  OUTCOME: 'Saída',
};

const EntryClassMap = {
  PENDING: '',
  INCOME: 'progress',
  OUTCOME: 'done',
};

function CardEntryComponent({
  id,
  date,
  type,
  description,
  value,
  setModalVisible,
  ...rest
}: CardDonationProps) {
  const [status] = useState(EntryType[type]);

  const statusClass = EntryClassMap[type];
  const diferenceInDays = CountDaysFromDate(date);
  // const valueInBRL = String(value).tolocaleString

  return (
    <div className={`card ${statusClass}`} {...rest}>
      <div className="id column">{id + 1}</div>
      <div className="donators column">
        {/* <span>{donator?.name}</span> */}
        <strong>{description}</strong>
      </div>
      <div className="deadline column">
        <span>Data</span>
        <p>{diferenceInDays}</p>
      </div>
      <div className="amount column">
        <span>Valor</span>
        <p>R$ {Number(value).toFixed(2)}</p>
      </div>
      <div className="status  badge column">
        <strong>{status}</strong>
      </div>
      <div className="actions column flex">
        <a className="btn white edit" title="Editar doação">
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

export default CardEntryComponent;
