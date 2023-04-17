import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import fullLogo from '../../assets/full-logo.png';
import { EmployeeContext } from '../../contexts/EmployeeContext';
import * as S from './EmployeeLogin.styles';
import { Button, TextField } from '../../components';

const EmployeeLogin = () => {
  const history = useHistory();
  const { employeeName, setEmployeeName } = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/employee/area');
  };

  const handleInputChange = (event) => {
    setEmployeeName(event.target.value);
  };

  return (
    <S.Section>
      <S.Logo src={fullLogo} alt="ultracar-logo" />

      <S.Form onSubmit={handleSubmit}>
        <TextField
          label="Nome do funcionário"
          type="text"
          id="employee-name"
          placeholder="Nome do funcionário"
          value={employeeName}
          callback={handleInputChange}
        />

        <Button type="submit" disabled={employeeName === ''}>
          Entrar
        </Button>
      </S.Form>
    </S.Section>
  );
};

export default EmployeeLogin;
