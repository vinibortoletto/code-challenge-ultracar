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
`;
