import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

export const Button = styled.button`
  color: ${vars.color.teal};

  &:hover {
    text-decoration: underline;
  }
`;
