import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

const Button = styled.button`
  background-color: ${vars.color.teal};
  color: ${vars.color.white};
  padding: ${vars.padding.default} 1rem;
  border-radius: ${vars.radius.default};

  background-color: ${({ disabled }) => disabled && vars.color.grey};
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  ${({ outline }) =>
    outline &&
    `
    background-color: ${vars.color.white};
    border: 1px solid ${vars.color.teal};
    color: ${vars.color.teal};

    &:hover {
      opacity: 1;
      background-color: ${vars.color.d_white};
    }
  `}
`;

export default Button;
