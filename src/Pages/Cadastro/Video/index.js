import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../Hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/menu/components/Button';
import videosRepository from '../../../repositories/videos';
import categorysRepository from '../../../repositories/categorys';

function CadastroVideo() {
  const history = useHistory();
  const [categorys, setCategorys] = useState([]);
  const categoryTitle = categorys.map(({ title })=> title);

  const { handle, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categorysRepository
      .getAll().then((categorysFromServer) => {
        setCategorys(categorysFromServer);
      });
  }, []);

  return (

    <PageDefault>
      <h1>Página de cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const chooseCategory = categorys.find((category) => category.title === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chooseCategory.id,
        }).then(() => {
          history.push('/');
          console.log('Deu certo fi');
        });
      }}
      >

        <FormField
          label="Titulo do vídeo"
          name="title"
          value={values.title}
          onChange={handle}
        />

        <FormField
          label="URL do vídeo"
          name="url"
          value={values.url}
          onChange={handle}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handle}
          sugestions={categoryTitle}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
