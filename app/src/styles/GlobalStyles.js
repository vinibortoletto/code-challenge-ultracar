import { createGlobalStyle } from 'styled-components';
import { ResetStyles } from './ResetStyles';
import { vars } from '../styles/variables';

export const GlobalStyles = createGlobalStyle`
  ${ResetStyles};
  
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: white;
    color: ${vars.color.black};
    
  } 

  .section_margin {
    margin-bottom: var(--m_hg);
  }
  
  .content {
    padding: 0 var(--m_sm);
  }

  input, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input::-webkit-input-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  input::-moz-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  textarea::-webkit-input-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
  textarea::-moz-placeholder {
    color: var(--d_green);
    opacity: 0.5;
  }
 
  label[for=search_products] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
