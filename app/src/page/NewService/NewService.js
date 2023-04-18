import React from 'react';
import { GoBackButton, Title } from '../../components';

const NewService = () => {
  return (
    <section>
      <GoBackButton />

      <Title text="Novo serviço" />

      <section>
        <h2>Informações do cliente</h2>

        <form></form>
      </section>
    </section>
  );
};

export default NewService;
