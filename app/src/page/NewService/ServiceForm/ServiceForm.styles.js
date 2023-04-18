import styled from 'styled-components/macro';
import { vars } from '../../../styles/variables';

export const Checkbox = styled.div`
  display: flex !important;

  label {
    width: 100%;
    color: ${({ disabled }) => (disabled ? vars.color.grey : vars.color.black)};
  }

  input {
    width: auto;
  }
`;
