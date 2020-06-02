import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    color: #016ec2;
    background: #f5f5f5;
  }
  body, input, button {
    font-size: 15px;
    font-family: 'Roboto Mono', sans-serif;
  }
  #root {
    margin: 0 0;
    min-height: 100vh;
  }
  button {
    cursor: pointer;
  }
`;
