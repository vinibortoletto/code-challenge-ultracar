import React, { useContext } from 'react';
import simpleLogo from '../../assets/simple-logo.png';
import * as S from './Header.styles';
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from '../../contexts';

const Header = () => {
  const history = useHistory();
  const { setEmployeeName } = useContext(EmployeeContext);

  const handleLogout = () => {
    localStorage.setItem('employee', JSON.stringify(''));
    setEmployeeName('');
    history.push('/employee/login');
  };

  return (
    <S.Header>
      <S.Logo src={simpleLogo} alt="ultracar-logo" />
      <S.Button type="button" onClick={handleLogout}>
        Sair
      </S.Button>
    </S.Header>
  );
};

export default Header;
