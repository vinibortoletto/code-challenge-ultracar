import React from 'react';
import { string } from 'prop-types';
import * as S from './Title.styles';

const Title = ({ text }) => {
  return (
    <S.Container>
      <h1>{text}</h1>
    </S.Container>
  );
};

Title.propTypes = {
  text: string.isRequired,
};

export default Title;
