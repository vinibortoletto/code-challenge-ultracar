import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from '../../contexts';
import simpleLogo from '../../assets/simple-logo.png';
import * as S from './Header.styles';

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
      <S.LogOutButton type="button" onClick={handleLogout}>
        Sair
      </S.LogOutButton>
    </S.Header>
  );
};

export default Header;
