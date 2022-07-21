import { createGlobalStyle } from 'styled-components'
import { a11y, normalize, reset } from './utils'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${a11y}

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  :root {
    /* Typography */
    --text: "Montserrat", sans-serif;

    /* Colors */
    --white: #fff;
    --black: #000;
    --primary: #4ac959;
    --secondary: #e88d39;
    --gray: #a2a2a2;
    --gray2: #959595;
  }

  body {
    color: var(--black);
    background: var(--white);
    font-family: var(--text);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
