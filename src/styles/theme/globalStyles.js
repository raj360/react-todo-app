/* eslint-disable import/no-anonymous-default-export */

import { PALETTE } from '../palette';
import { FONT_FAMILY } from './typography';

export default `
  * {
    box-sizing: border-box;
  }

  *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: ${PALETTE.SLATE_700};
    font-family: ${FONT_FAMILY.SANS_SERIF};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding: 0;
  }

  #root {
    background: ${PALETTE.SLATE_200};
    margin: 0;
    height: 100vh;
    padding: 0;
    width: 100%
  }

  input {
    font-family: ${FONT_FAMILY.SANS_SERIF};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  p {
    margin: 0;
  }

  strong {
    font-weight: 600;
  }

  @media print {
    html,
    body {
      font-size: 14px !important;
    }
    .hide-print {
      display: none !important;
    }
  }

`;
