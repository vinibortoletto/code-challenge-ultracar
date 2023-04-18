import styled from 'styled-components/macro';
import { vars } from '../../styles/variables';

export const Section = styled.section`
  input,
  textarea {
    width: 100%;
    border: 1px solid ${vars.color.black};
    border-radius: ${vars.radius.default};
    padding: ${vars.padding.default};
  }

  textarea {
    height: 7rem;
  }

  label {
    position: absolute;
    left: -100%;
  }

  label[for='requireCarParts'] {
    position: static;
  }

  h2 {
    font-weight: bold;
    color: ${vars.color.teal};
    margin-bottom: 0.5rem;
  }

  form {
    display: grid;
    gap: 1rem;

    div {
      display: grid;
      gap: 0.5rem;
    }

    p {
      text-align: right;
      color: ${vars.color.red};
      font-size: 0.8rem;
    }

    button {
      width: 10rem;
      margin: auto;
    }
  }
`;

export const PersonalFields = styled.div`
  grid-template-columns: 3fr 1fr;
`;

export const AddressFields = styled.div`
  grid-template-columns: 2fr 3fr 1fr;
`;

export const CarFields = styled.div`
  grid-template-columns: 2fr 1fr 1fr;
`;
