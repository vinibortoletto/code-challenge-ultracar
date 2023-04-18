import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

const Button = styled.button`
  background-color: ${vars.color.teal};
  color: ${vars.color.white};
  padding: ${vars.padding.default} 1rem;
  border-radius: ${vars.radius.default};

  background-color: ${({ disabled }) => disabled && vars.color.grey};
`;

export default Button;
