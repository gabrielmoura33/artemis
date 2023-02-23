/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg';
import toast from '../../components/toast';
import { useCreateDonationMutation } from '../../graphql/generated/graphql';
import { withApollo } from '../../lib/withApollo';
import styles from '../../styles/pages/novoAnimal.module.scss';

interface NewDonnationProps {
  donatorsName: string;
  value: number;
  description: string;
}
function NewDonation() {
  const { register, handleSubmit, reset } = useForm();
  const [createDonation] = useCreateDonationMutation();
  async function handleSubmitForm(data: NewDonnationProps) {
    try {
      await createDonation({
        variables: {
          description: data.description,
          value: Number(data.value),
          donatorsName: data.donatorsName,
        },
      });
      reset();

      toast({ type: 'success', message: `Doação cadastrada com sucesso!` });

      Router.push('/doacoes');
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
          <h1>Cadastrar nova doação</h1>
          <p>Cadastre uma nova doação registrada por seus doadores</p>
          <Link href="/">
            <a className="backLink">
              <FiArrowLeft size={16} color="#75cddb" />
              Voltar para Home
            </a>
          </Link>
        </section>
        <form onSubmit={handleSubmit(handleSubmitForm as any)}>
          <input placeholder="Doador" {...register('donatorsName')} />

          <input
            type="number"
            placeholder="Valor (R$)"
            {...register('value')}
          />

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

export default withApollo(NewDonation);
