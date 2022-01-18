import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  footer, header {
    padding: 1rem;
  }

  button, svg {
    transition: 0.25s ease-in-out;
  }

  #root {
    width: 100vw;
    height: 100vh;

    min-width: 320px;
    min-height: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export default GlobalStyles;
