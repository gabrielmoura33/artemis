/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsCloudArrowUp } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../assets/images/logo.svg';
import toast from '../components/toast';
import { useAuth } from '../context/AuthContext';
import { useCreateAnimalMutation } from '../graphql/generated/graphql';
import { withApollo } from '../lib/withApollo';
import styles from '../styles/pages/novoAnimal.module.scss';

const ANIMAL_BREEDS = {
  dog: [
    'Akita',
    'Border Collie',
    'Basset',
    'Chow Chow',
    'Golden Retriever',
    'SRD',
  ],
  cat: ['Persa', 'Maine Coon', 'Sphynx', 'SRD'],
  fish: ['SRD'],
  turtles: ['SRD'],
};
type AnimalBreeds = 'dog' | 'cat' | 'fish' | 'turtles';

function NewIncident() {
  const [breeds, setBreeds] = React.useState(ANIMAL_BREEDS['dog']);
  const { user } = useAuth();
  const [createAnimal] = useCreateAnimalMutation();
  const [selectedImages, setSelectedImages] = React.useState<any>([]);
  const [files, setFiles] = React.useState<any>([]);
  function handleSpecieChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const specie = event.target.value as AnimalBreeds;

    setBreeds(ANIMAL_BREEDS[specie]);
  }
  const { register, handleSubmit } = useForm();

  async function handleSubmitForm(data: any) {
    try {
      let photos = [];
      if (files.length > 0) {
        for (const file of files) {
          try {
            handleUploadFile(file);
            photos.push({
              url: `https://artemis-tis-v-bkt.s3.amazonaws.com/${file.name}`,
            });
          } catch (error) {
            continue;
          }
        }
      }
      await createAnimal({
        variables: {
          ...data,
          birth_date: parseISO(data.birth_date),
          ongId: user.uid,
          photos: photos || undefined,
        },
      });
      toast({ type: 'success', message: `Cadastro realizado com sucesso!` });
      Router.push('/animais');
    } catch (error) {
      console.log(error);
      toast({
        type: 'error',
        message: `Ops! Ocorreu um erro ao cadastrar animal, tente novamente mais tarde`,
      });
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    setSelectedImages([
      ...selectedImages,
      {
        url: URL.createObjectURL(e.target.files[0]),
      },
    ]);

    setFiles([...files, e.target.files[0]]);
  }

  const handleUploadFile = async (file: any) => {
    let { data } = await axios.post('/api/s3/upload-image', {
      name: file.name,
      type: file.type,
    });

    const url = data.url;

    await axios.put(url, file, {
      headers: {
        'Content-type': file.type,
        'Access-Control-Allow-Origin': '*',
      },
    });
  };

  function handleRemoveImage(url: string) {
    const index = selectedImages.findIndex((el) => el.url === url);

    if (index !== -1) {
      setSelectedImages(selectedImages.filter((el) => el.url !== url));
    }
  }
  return (
    <div className={styles['new-incident-container']}>
      <div className={styles['content']}>
        <section>
          <Image src={logoImg} alt="Artemis - Gestão para ONG's" />
          <h1>Cadastrar novo animal</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um parceiro para seu
            amigo.
          </p>
          <Link href="/animais">
            <a className="backLink">
              <FiArrowLeft size={16} color="#75cddb" />
              Voltar para Home
            </a>
          </Link>
        </section>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input placeholder="Nome" {...register('name')} />

          <input
            type="date"
            placeholder="Data de Nascimento"
            {...register('birth_date')}
          />
          <div className={styles['input-group']}>
            <select {...register('type')} onChange={handleSpecieChange}>
              <option value="">Especie</option>
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
            </select>
            <select {...register('gender')}>
              <option value="-">Gênero</option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
              <option value="U">Não identificado</option>
            </select>
          </div>
          <select {...register('breed')} style={{ marginTop: 8 }}>
            <option value="">Raça</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <textarea
            {...register('comments')}
            placeholder="Observaçoes"
          ></textarea>

          <input
            multiple
            type="file"
            id="upload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <label htmlFor="upload" className={styles['animal-file-upload']}>
            <BsCloudArrowUp
              color="#A8A8B3"
              size={32}
              style={{ marginRight: 15 }}
            />{' '}
            Selecione as Imagens
          </label>
          <div className={styles['images-container']}>
            {selectedImages.map((image) => (
              <div key={image.url} className={styles['image-content']}>
                <a
                  className={styles['exclude']}
                  onClick={() => handleRemoveImage(image.url)}
                >
                  x
                </a>
                <img src={image.url} alt="" />
              </div>
            ))}
          </div>
          <div className={styles['input-group']}>
            <button
              type="button"
              className="secondary-button"
              onClick={() => Router.back()}
            >
              Cancelar
            </button>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withApollo(NewIncident);
