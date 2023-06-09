import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './GoBackButton.styles';

const GoBackButton = () => {
  const history = useHistory();

  return (
    <S.Button
      type="button"
      onClick={() => history.push('/employee/area')}
    >{`< Voltar`}</S.Button>
  );
};

export default GoBackButton;
