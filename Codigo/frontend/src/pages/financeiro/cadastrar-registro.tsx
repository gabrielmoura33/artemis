/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg';
import toast from '../../components/toast';
import { useAuth } from '../../context/AuthContext';
import { useCreateEntryMutation } from '../../graphql/generated/graphql';
import { withApollo } from '../../lib/withApollo';
import styles from '../../styles/pages/novoAnimal.module.scss';

interface NewEntryProps {
  date: string;
  description: string;
  firebaseOngId: string;
  value: number;
  type: 'INCOME' | 'OUTCOME';
}
function NewEntry() {
  const { register, handleSubmit, reset } = useForm();

  const [createEntry] = useCreateEntryMutation();
  const { user } = useAuth();
  async function handleSubmitForm(data: NewEntryProps) {
    try {
      const dataFormated = parse(data.date, 'dd/mm/yyyy', new Date());

      if (!dataFormated) {
        toast({
          type: 'error',
          message: 'Data em formato inválido! (DD-MM-YYYY)',
        });
        return;
      }

      await createEntry({
        variables: {
          description: data.description,
          value: Number(data.value),
          date: dataFormated,
          firebaseOngId: user.uid,
          type: data.type,
        },
      });
      reset();

      toast({ type: 'success', message: `Registo cadastrado com sucesso!` });

      Router.push('/financeiro');
    } catch (error) {
      console.log(error);
      toast({
        type: 'error',
        message: `Ops! Ocorreu um erro ao cadastrar animal, tente novamente mais tarde`,
      });
    }
  }
  return (
    <div className={styles['new-incident-container']}>
      <div className={styles['content']}>
        <section>
          <Image src={logoImg} alt="Artemis - Gestão para ONG's" />
          <h1>Cadastrar novo registro financeiro</h1>
          <p>
            Cadastre um registro financeiro <br /> Ex: Gastos com comida para
            cachorro
          </p>
          <Link href="/financeiro">
            <a className="backLink">
              <FiArrowLeft size={16} color="#75cddb" />
              Voltar para Home
            </a>
          </Link>
        </section>
        <form onSubmit={handleSubmit(handleSubmitForm as any)}>
          <input
            type="text"
            placeholder="Ex: DD/MM/YYYY"
            {...register('date')}
          />

          <input
            type="number"
            placeholder="Valor (R$)"
            {...register('value')}
          />

          <select
            id=""
            {...register('type')}
            style={{ marginTop: 4, marginBottom: 2 }}
          >
            <option value="-">Tipo do registro</option>
            <option value="INCOME">Entrada</option>
            <option value="OUTCOME">Saída</option>
          </select>

          <textarea
            placeholder="Descreva brevemente"
            id=""
            {...register('description')}
          ></textarea>

          <div className={styles['input-group']}>
            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withApollo(NewEntry);
