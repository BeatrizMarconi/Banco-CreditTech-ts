import { createGlobalStyle, css } from "styled-components";

export const bodyStyles = css`
  @font-face {
    font-family: "Open Sans", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Open Sans", sans-serif;
  }
  body {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
