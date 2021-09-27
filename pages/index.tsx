import React from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { Container } from "../components/Container";
import { NewTimeEntry } from "../components/NewTimeEntry/NewTimeEntry";
import { TimeEntries } from "../components/TimeEntries/TimeEntries";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <NewTimeEntry />
        <TimeEntries />
      </Container>
    </>
  );
}

export default Homepage;
