import React from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { ComponentContainer } from "../components/ComponentContainer";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ComponentContainer />
    </>
  );
}

export default Homepage;
