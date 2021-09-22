import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: ProximaNova;
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
