import React, { useContext } from 'react';
import { EmployeeContext } from '../../contexts';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components';
import * as S from './EmployeeArea.styles';

const EmployeeArea = () => {
  const history = useHistory();
  const { employeeName } = useContext(EmployeeContext);

  return (
    <S.Section>
      <S.Greeting>
        <h1>
          Olá, <span>{employeeName}</span>
        </h1>
      </S.Greeting>

      <S.ButtonContainer>
        <Button
          type="button"
          onClick={() => history.push('/employee/service/all')}
          outline
        >
          Lista de serviços
        </Button>

        <Button
          type="button"
          onClick={() => history.push('/employee/service/new')}
        >
          Novo serviço
        </Button>
      </S.ButtonContainer>
    </S.Section>
  );
};

export default EmployeeArea;
