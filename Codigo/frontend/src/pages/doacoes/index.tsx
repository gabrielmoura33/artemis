/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import plusIcon from '../../assets/icons/plus-24.svg';
import logoImg from '../../assets/images/logo-alt.svg';
import CardComponent from '../../components/CardComponent';
import { DeleteModal } from '../../components/DeleteModal';
import { Loading } from '../../components/Loading';
import { ProfilePopover } from '../../components/Popover';
import toast from '../../components/toast';
import { useRemoveDonationMutation } from '../../graphql/generated/graphql';
import { useGetDonations } from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';
function DoacoesPage() {
  const { data, loading, refetch } = useGetDonations();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [removeDonation] = useRemoveDonationMutation();
  async function handleDeleteEntry() {
    try {
      await removeDonation({
        variables: {
          id: deleteId,
        },
      });

      toast({
        type: 'success',
        message: 'Doacao deletada com sucesso!',
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
      {/* <DeleteModal /> */}
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
                <strong>{data?.donations.length}</strong>
                Doações ao total
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
            <Link href="/doacoes/cadastrar">
              <a className="btn orange">
                <span>
                  <Image src={plusIcon} alt="Novo doação" />
                </span>
                Adicionar nova doação
              </a>
            </Link>
          </section>
        </div>
      </header>
      <div className="container">
        <main className="animate-up delay-2">
          <h1 className="sr-only">Trabalhos</h1>

          <div className="cards">
            {data?.donations.map((el, index) => (
              <CardComponent
                value={el.value}
                id={index}
                createdAt={el.createdAt}
                description={el.description}
                statusString={el.status}
                donator={el.donator}
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

export default withApollo(DoacoesPage);
