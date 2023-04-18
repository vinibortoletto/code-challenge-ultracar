import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  max-width: 60rem;
  margin: auto;
`;

export const Logo = styled.img`
  width: 3rem;
`;

export const LogOutButton = styled.button`
  color: ${vars.color.teal};

  &:hover {
    text-decoration: underline;
  }
`;
