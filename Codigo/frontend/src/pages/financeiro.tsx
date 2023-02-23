/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import plusIcon from '../assets/icons/plus-24.svg';
import logoImg from '../assets/images/logo-alt.svg';
import CardEntryComponent from '../components/CardEntryComponent';
import { DeleteModal } from '../components/DeleteModal';
import { Loading } from '../components/Loading';
import { ProfilePopover } from '../components/Popover';
import toast from '../components/toast';
import { useAuth } from '../context/AuthContext';
import {
  useGetEntriesQuery,
  useRemoveEntryMutation,
} from '../graphql/generated/graphql';
import { withApollo } from '../lib/withApollo';

function FinancesPage() {
  const { user } = useAuth();
  const { data, loading, refetch } = useGetEntriesQuery({
    variables: {
      firebaseId: user.uid,
    },
  });

  const [removeEntry] = useRemoveEntryMutation();

  const [totalBalance, setTotalBalance] = useState(0.0);
  const [incomeBalance, setIncomeBalance] = useState(0.0);
  const [outcomeBalance, setOutcomeBalance] = useState(0.0);

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    data?.entry.forEach((el) => {
      if (el.type === 'INCOME')
        setIncomeBalance(incomeBalance + Number(el.value));
      if (el.type === 'OUTCOME')
        setOutcomeBalance(outcomeBalance + Number(el.value));

      setTotalBalance(totalBalance + Number(el.value));
    });
  }, [data?.entry]);

  async function handleDeleteEntry() {
    try {
      await removeEntry({
        variables: {
          id: deleteId,
        },
      });

      setModalVisible(false);
      refetch();
    } catch (error) {
      toast({
        type: 'error',
        message: 'Ops! Ocorreu um erro ao deletar registro!',
      });
    }
  }
  return (
    <>
      <DeleteModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDelete={() => handleDeleteEntry()}
      ></DeleteModal>
      {loading && <Loading></Loading>}
      <Head>
        <title>Artemis - Gestão Para ONGs</title>
      </Head>
      <header className="page-header">
        <div className="container">
          <ProfilePopover></ProfilePopover>
          <section id="top" className="animate-up z-15">
            <h2 className="sr-only">Homepage</h2>
            <Image src={logoImg} alt="Be The hero" />
          </section>

          <div className="separator"></div>

          <section id="summary" className="animate-up delay-1">
            <div className="info">
              <div className="total">
                <strong>
                  R$ {Number(totalBalance).toLocaleString('pt-br')}
                </strong>
                Total
              </div>
              <div className="in-progress">
                <strong>
                  R$ {Number(incomeBalance).toLocaleString('pt-br')}
                </strong>
                Entradas
              </div>
              <div className="finished">
                <strong>
                  R$ {Number(outcomeBalance).toLocaleString('pt-br')}
                </strong>
                Saidas
              </div>
            </div>
            <Link href="financeiro/cadastrar-registro">
              <a className="btn orange">
                <span>
                  <Image
                    src={plusIcon}
                    alt="Novo entrada | saida"
                    title="Adicionar entrada ou saida"
                  />
                </span>
                Adicionar registro
              </a>
            </Link>
          </section>
        </div>
      </header>
      <div className="container">
        <main className="animate-up delay-2">
          <h1 className="sr-only">Trabalhos</h1>

          <div className="cards">
            {data?.entry.map((el, index) => (
              <CardEntryComponent
                value={el.value}
                id={index}
                date={el.date}
                description={el.description}
                type={el.type as 'INCOME' | 'OUTCOME'}
                setModalVisible={() => {
                  setModalVisible(true);
                  setDeleteId(el.id);
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['artemis.token']: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default withApollo(FinancesPage);
