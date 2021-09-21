import React from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { PageContainer } from "../components/PageContainer";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageContainer />
    </>
  );
}

export default Homepage;
