import styled from 'styled-components/macro';
import { vars } from '../../../styles/variables';

export const CarPartSearch = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

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

export const CarPartRow = styled.div`
  display: grid !important;
  grid-template-columns: 50% 30% 20%;

  div {
    margin: 0.25rem 0;
    border: 1px solid ${vars.color.l_grey};
    border-radius: ${vars.radius.default};
    padding: ${vars.padding.default};
  }

  button {
    color: ${vars.color.red};
    font-weight: bold;
  }
`;
