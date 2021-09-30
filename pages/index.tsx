import React, { useState } from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { Container } from "../components/Container";
import { NewTimeEntry } from "../components/NewTimeEntry/NewTimeEntry";
import { TimeEntries } from "../components/TimeEntries/TimeEntries";
import { mockTimeEntries } from "../fixtures/time-entries";
import { SearchBar } from "../components/SearchBar/SearchBar";

function Homepage() {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const handleNewTimeEntry = (newTimeEntry) =>
    setTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: newTimeEntry.client,
        startTimestamp: new Date(`${newTimeEntry.date} ${newTimeEntry.from}`).toISOString(),
        stopTimestamp: new Date(`${newTimeEntry.date} ${newTimeEntry.to}`).toISOString(),
      },
    ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchBar timeEntries={timeEntries} />
      <Container>
        <NewTimeEntry handleNewTimeEntry={handleNewTimeEntry} />
        <TimeEntries timeEntries={timeEntries} />
      </Container>
    </>
  );
}

export default Homepage;
