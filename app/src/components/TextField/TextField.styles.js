import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border: 1px solid ${vars.color.black};
    border-radius: ${vars.radius.default};
    padding: ${vars.padding.default};
  }

  label {
    position: absolute;
    left: -100%;
  }
`;
