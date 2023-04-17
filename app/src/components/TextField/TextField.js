import React from 'react';
import { string, func } from 'prop-types';
import * as S from './TextField.styles';

const TextField = ({ label, type, id, placeholder, value, callback }) => {
  return (
    <S.Container>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={callback}
      />
    </S.Container>
  );
};

TextField.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  callback: func.isRequired,
};

export default TextField;
