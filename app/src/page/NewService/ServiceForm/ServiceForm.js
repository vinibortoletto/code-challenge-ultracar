import React, { useContext, useState } from 'react';
import TextField from '../TextField/TextField';
import { ErrorMessage, Field } from 'formik';
import * as S from './ServiceForm.styles';
import { AutoComplete } from 'antd';
import { bool } from 'prop-types';
import { ServicesContext } from '../../../contexts';

const options = [
  {
    label: 'Pneu 140x70x17 Cb300',
    value: 'Pneu 140x70x17 Cb300',
  },
  {
    label: 'Para-brisa Central Volvo',
    value: 'Para-brisa Central Volvo',
  },
  {
    label: 'Par Farol Vidro Uno',
    value: 'Par Farol Vidro Uno',
  },
];

const carPartListStock = [
  {
    id: 1,
    name: 'Pneu 140x70x17 Cb300',
    price: 100,
  },
  {
    id: 2,
    name: 'Para-brisa Central Volvo',
    price: 200,
  },
  {
    id: 3,
    name: 'Par Farol Vidro Uno',
    price: 300,
  },
];

const ServiceForm = ({ requireCarParts }) => {
  // const [carPartList, setCarPartList] = useState([]);
  const { carPartList, setCarPartList } = useContext(ServicesContext);
  const [autocomplete, setAutocomplete] = useState('');

  const handleAutoComplete = (value) => {
    const selectedCarPart = carPartListStock.find(
      (carPart) => carPart.name === value
    );

    const hasCarPart = carPartList.some(
      (carPart) => carPart.id === selectedCarPart.id
    );

    if (!hasCarPart) {
      setCarPartList([...carPartList, selectedCarPart]);
    }

    setAutocomplete('');
  };

  const handleAutocompleteChange = (value) => {
    setAutocomplete(value);
  };

  const removeCarPart = (id) => {
    const newCarPartList = carPartList.filter((carPart) => carPart.id !== id);
    setCarPartList(newCarPartList);
  };

  return (
    <section>
      <h2>Informações do serviço</h2>

      <TextField
        label="Descrição do serviço"
        as="textarea"
        type="textarea"
        name="serviceDescription"
        placeholder="Descrição do serviço"
      />

      <AutoComplete
        style={{ width: 200 }}
        placeholder="Nome do funcionário"
        filterOption={true}
        options={options}
        value={autocomplete}
        onChange={handleAutocompleteChange}
        onSelect={handleAutoComplete}
        disabled={requireCarParts}
      />

      {carPartList.map(({ name, price, id }) => (
        <div key={id}>
          <div>{name}</div>
          <div>{price}</div>
          <button type="button" onClick={() => removeCarPart(id)}>
            x Remover
          </button>
        </div>
      ))}

      <S.Checkbox disabled={carPartList.length > 0 && true}>
        <Field
          type="checkbox"
          name="requireCarParts"
          id="requireCarParts"
          placeholder="Não requer novas peças"
          disabled={carPartList.length > 0 && true}
        />
        <label htmlFor="requireCarParts">Não requer novas peças</label>
        <p>
          <ErrorMessage name="requireCarParts" />
        </p>
      </S.Checkbox>
    </section>
  );
};

ServiceForm.propTypes = {
  requireCarParts: bool,
};

export default ServiceForm;
