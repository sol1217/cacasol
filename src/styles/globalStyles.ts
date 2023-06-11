import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  div {
    -webkit-tap-highlight-color: transparent;
  }
  
  img {
    user-select: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  body {
    background-color: ${colors.silverBlue};
  }
`
