/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import walkingDogSrc from '../assets/images/background.png';
import logoImg from '../assets/images/logo.svg';
import toast from '../components/toast';
import { useAuth } from '../context/AuthContext';
import styles from '../styles/pages/index.module.scss';

interface LoginProps {
  email: string;
  password: string;
}
export default function Home() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { login } = useAuth();

  const handleLogin = useCallback(
    async ({ email, password }: LoginProps) => {
      try {
        const user = await login(email, password);

        // if (!user.user.emailVerified) {
        //   toast({
        //     type: 'error',
        //     message: 'Por favor confirmar seu e-mail para acessar',
        //   });

        //   return;
        // }

        toast({
          type: 'success',
          message: 'Usuário Logado!',
        });
      } catch (error: any) {
        if (error.code === 'auth/wrong-password') {
          return toast({
            type: 'error',
            message: 'Combinação de usuário e senha incorretos!',
          });
        }

        toast({
          type: 'error',
          message:
            'Ocorreu um erro ao se conectar, entre em contato com um administrador do sistema',
        });
      } finally {
        reset();
      }
    },
    [login, reset]
  );
  return (
    <div className={styles['logon-container']}>
      <section className={styles.form}>
        <Image src={logoImg} alt="Be The hero" />

        <form onSubmit={handleSubmit(handleLogin as any)}>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" {...register('email')} />

          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          <button className={styles.button} type="submit">
            Entrar
          </button>

          <Link href="cadastro">
            <a className={styles.backLink}>
              <FiLogIn size={16} color="#75CDDB" style={{ marginRight: 19 }} />
              Não tenho cadastro
            </a>
          </Link>
        </form>
      </section>

      <Image src={walkingDogSrc} alt="Homem com cachorro" />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['artemis.token']: token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/doacoes',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
