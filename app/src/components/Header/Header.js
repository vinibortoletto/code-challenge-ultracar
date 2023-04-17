import React from 'react';
import simpleLogo from '../../assets/simple-logo.png';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={simpleLogo} alt="ultracar-logo" />
      <S.Button type="button">Sair</S.Button>
    </S.Header>
  );
};

export default Header;
