import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from '../../contexts';
import { Button, TextField } from '../../components';
import fullLogo from '../../assets/full-logo.png';
import * as S from './EmployeeLogin.styles';

const EmployeeLogin = () => {
  const history = useHistory();
  const { employeeName, setEmployeeName } = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('employee', JSON.stringify(employeeName));
    history.push('/employee/area');
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmployeeName(value);
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
