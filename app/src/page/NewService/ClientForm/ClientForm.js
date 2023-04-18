import React from 'react';
import TextField from '../TextField/TextField';
import * as S from './ClientForm.styles';

const ClientForm = () => {
  return (
    <S.Section>
      <h2>Informações do cliente</h2>

      <S.PersonalFields>
        <TextField
          label="Nome completo"
          as="input"
          type="text"
          name="fullname"
          placeholder="Nome completo"
        />
        <TextField
          label="Telefone"
          as="input"
          type="text"
          name="phone"
          placeholder="Telefone"
        />
      </S.PersonalFields>

      <S.AddressFields>
        <TextField
          label="CEP"
          as="input"
          type="text"
          name="cep"
          placeholder="CEP"
        />
        <TextField
          label="Rua"
          as="input"
          type="text"
          name="street"
          placeholder="Rua"
        />
        <TextField
          label="Número"
          as="input"
          type="text"
          name="number"
          placeholder="Número"
        />
      </S.AddressFields>

      <S.CarFields>
        <TextField
          label="Modelo do carro"
          as="input"
          type="text"
          name="carModel"
          placeholder="Modelo do carro"
        />
        <TextField
          label="Placa"
          as="input"
          type="text"
          name="carPlate"
          placeholder="Placa"
        />
        <TextField
          label="Cor do carro"
          as="input"
          type="text"
          name="carColor"
          placeholder="Cor do carro"
        />
      </S.CarFields>

      {/* <Button type="submit" disabled={isSubmitting}>
              Gerar QR Code
            </Button> */}
    </S.Section>
  );
};

export default ClientForm;
