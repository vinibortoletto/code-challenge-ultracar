import styled from 'styled-components/macro';
import { vars } from '../../../styles/variables';

export const CarPartSearch = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .ant-select {
    width: 100%;
  }
`;

export const Checkbox = styled.div`
  display: flex !important;
  min-width: 14rem;

  label {
    width: 100%;
    color: ${({ disabled }) => (disabled ? vars.color.grey : vars.color.black)};
  }

  input {
    width: auto;
  }
`;
