import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

export const Section = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Greeting = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${vars.color.grey};

  span {
    color: ${vars.color.teal};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.3rem;

  button {
    padding: 2rem 3rem;
  }
`;
