/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import plusIcon from '../assets/icons/plus-24.svg';
import logoImg from '../assets/images/logo-alt.svg';
import CardAnimalComponent, { Animal } from '../components/CardAnimalComponent';
import { DeleteModal } from '../components/DeleteModal';
import { Loading } from '../components/Loading';
import { ProfilePopover } from '../components/Popover';
import toast from '../components/toast';
import {
  useGetAnimalsQuery,
  useRemoveAnimalMutation,
} from '../graphql/generated/graphql';
import { withApollo } from '../lib/withApollo';

function AnimalsPage() {
  const { data, loading, refetch } = useGetAnimalsQuery();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [removeAnimal] = useRemoveAnimalMutation();
  async function handleDeleteEntry() {
    try {
      await removeAnimal({
        variables: {
          id: deleteId,
        },
      });

      toast({
        type: 'success',
        message: 'Animal deletado com sucesso!',
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
          <ProfilePopover />
          <section id="top" className="animate-up z-15">
            <h2 className="sr-only">Homepage</h2>
            <Image src={logoImg} alt="Be The hero" />
          </section>

          <div className="separator"></div>

          <section id="summary" className="animate-up delay-1">
            <div className="info">
              <div className="total">
                <strong>{data?.animals.length}</strong>
                Animais ao total
              </div>
              <div className="in-progress">
                <strong>0</strong>
                Em andamento
              </div>
              <div className="finished">
                <strong>0</strong>
                Encerrados
              </div>
            </div>

            <Link href="/cadastrar-animal">
              <a className="btn orange">
                <span>
                  <Image src={plusIcon} alt="Novo doação" />
                </span>
                Adicionar novo animal
              </a>
            </Link>
          </section>
        </div>
      </header>
      <div className="container">
        <main className="animate-up delay-2">
          <h1 className="sr-only">Trabalhos</h1>

          <div className="cards">
            {data?.animals.map((el, index) => (
              <CardAnimalComponent
                animal={el as Animal}
                id={index}
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

export default withApollo(AnimalsPage);
