import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-align: center;
  }

  @font-face {
    font-family: "Bello Script";
    src: url("./font/bello-script.ttf");
  }
  
  @font-face {
    font-family: "ProximaNova";
    src: url("./font/proxima-nova-regular.woff");
  }
`;
