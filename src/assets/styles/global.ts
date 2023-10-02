import { css } from '@emotion/css'

export const globals = css`
  html {
	box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  @font-face {
    font-family: 'Raleway';
    src: local('Raleway-Regular'),
      url('fonts/Raleway-Regular.woff2') format('woff2'),
      url('fonts/Raleway-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway';
    src: local('Raleway-SemiBold'),
      url('fonts/Raleway-SemiBold.woff2') format('woff2'),
      url('fonts/Raleway-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap; 
  }

  body {
    min-width: 320px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    background-color: red;
    color: red;
  }

  .test-class {
    color: red;
  }
`