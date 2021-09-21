import React from "react";
import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { NewTimeEntry } from "../components/NewTimeEntry/NewTimeEntry";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NewTimeEntry />
    </>
  );
}

export default Homepage;
