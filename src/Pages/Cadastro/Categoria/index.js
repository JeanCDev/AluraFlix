import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from "../../../components/FormField";
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    const inicialValues = {
      name: '',
      description: '',
      color: ''
    }

    const [categorys, setCategorys] = useState([]);
    const [values, setValues] = useState(inicialValues);


    function setValue(key, value){
      setValues({
        ...values,
        [key]: value,
      });
    }

    function handle(i){
      setValue(
        i.target.getAttribute('name'), 
        i.target.value
      );
    }

    return(
      <PageDefault>
        <h1>Página de cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(e){
          e.preventDefault();
          setCategorys([
            ...categorys,
            values
          ]);

          setValues(inicialValues);
        }}>

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
              type="text"
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
          
          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorys.map((category, index) =>{
            return (
              <li key={category+index}>
                {category.name}
              </li>
            )
          })}
          </ul>

        <Link to='/'>
          Ir pra Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;