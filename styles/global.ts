import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ProximaNova;
    list-style: none;
    margin: 0;
    padding: 0;
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
