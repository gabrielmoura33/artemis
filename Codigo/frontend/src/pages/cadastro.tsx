import { sendEmailVerification } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import logoImg from '../assets/images/logo.svg';
import toast from '../components/toast';
import { useAuth } from '../context/AuthContext';
import { useCreateOngMutation } from '../graphql/generated/graphql';
import { withApollo } from '../lib/withApollo';
import styles from '../styles/pages/cadastro.module.scss';
interface RegisterProps {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
  city: string;
  region: string;
}
function Register() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { signUp } = useAuth();
  const [createOng] = useCreateOngMutation();
  const handleSignUp = useCallback(
    async (data: RegisterProps) => {
      try {
        const { email, password } = data;

        const { user } = await signUp(email, password);
        sendEmailVerification(user);

        await createOng({
          variables: {
            city: data.city,
            email: data.email,
            name: data.name,
            region: data.region,
            whatsapp: data.whatsapp,
          },
        });

        toast({
          type: 'success',
          message:
            'ONG Cadastrada com sucesso, verifique o e-mail de confirmação enviado!',
        });
      } catch (error) {
        console.log(error);
        toast({
          type: 'error',
          message:
            'Ocorreu um erro ao cadastrar ONG, tente novamente mais tarde!',
        });
      } finally {
        reset();
      }
    },
    [reset, signUp]
  );
  return (
    <div className={styles['register-container']}>
      <div className={styles.content}>
        <section>
          <Image src={logoImg} alt="Artemis - Gestão para ONG's" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os bichinhos da sua ONG.
          </p>
          <Link href="/">
            <a className={styles.backLink}>
              <FaArrowLeft size={16} color="#75cddb" />
              Já tenho cadastro
            </a>
          </Link>
        </section>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <input placeholder="Nome da Ong" {...register('name')} />
          <input type="email" placeholder="E-Mail" {...register('email')} />
          <input
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          <input placeholder="Whatsapp" {...register('whatsapp')} />

          <div className={styles['input-group']}>
            <input placeholder="Cidade" {...register('city')} />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              {...register('region')}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default withApollo(Register);
