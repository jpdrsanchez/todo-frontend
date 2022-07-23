import { createGlobalStyle } from 'styled-components'
import { a11y, normalize, reset, soleilFont } from './utils'

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${a11y}
  ${soleilFont}

  html {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  :root {
    /* Typography */
    --text: "Montserrat", sans-serif;
    --tag: 'Soleil', sans-serif;

    /* Colors */
    --white: #fff;
    --white2: #f7f7f7;
    --black: #000;
    --black2: #312F4F;
    --black3: #06152B;
    --primary: #4ac959;
    --secondary: #e88d39;
    --gray: #a2a2a2;
    --gray2: #959595;
    --gray3: #999;
    --gray4: #9499b3;
    --gray5: #C4C4C4;
    --gray6: #9A9A9A;
    --green: #46BD62;
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
