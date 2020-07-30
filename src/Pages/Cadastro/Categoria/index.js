/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/menu/components/Button';

function CadastroCategoria() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categorys, setCategorys] = useState([]);
  const [values, setValues] = useState(inicialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handle(i) {
    setValue(
      i.target.getAttribute('name'),
      i.target.value,
    );
  }

  useEffect(() => {
    console.log('oi');
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorys'
      : 'https://aluraflixbe.herokuapp.com/categorys';

    fetch(url).then(async (response) => {
      const resp = await response.json();

      setCategorys([
        ...resp,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Página de cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorys([
          ...categorys,
          values,
        ]);

        setValues(inicialValues);
      }}
      >

        <div>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handle}
          />
        </div>

        <div>
          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handle}
          />
        </div>

        <div>
          <FormField
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handle}
          />
        </div>

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorys.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorys.map((category, index) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir pra Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
