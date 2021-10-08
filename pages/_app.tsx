import React from "react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { StoreContextProvider } from "../contexts/StoreContext";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreContextProvider>
  );
};
export default App;
