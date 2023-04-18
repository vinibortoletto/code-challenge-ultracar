import React from 'react';
import { GoBackButton, Title } from '../../components';
import ClientForm from './ClientForm/ClientForm';
import * as S from './NewService.styles';
import ServiceForm from './ServiceForm/ServiceForm';

const NewService = () => {
  return (
    <S.Section>
      <GoBackButton />

      <Title text="Novo serviço" />

      <ClientForm />
      <ServiceForm />
    </S.Section>
  );
};

export default NewService;
