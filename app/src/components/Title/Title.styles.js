import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';
import { breakpoint } from '../../styles/breakpoint';

export const Container = styled.div`
  font-weight: bold;
  color: ${vars.color.teal};
  font-size: 1.5rem;
  margin: 1rem 0;

  @media ${breakpoint('600')} {
    font-size: 2rem;
  }
`;
