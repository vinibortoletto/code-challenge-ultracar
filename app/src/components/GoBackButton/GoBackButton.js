import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackButton = () => {
  const history = useHistory();

  return (
    <button type="button" onClick={() => history.goBack()}>{`< Voltar`}</button>
  );
};

export default GoBackButton;
