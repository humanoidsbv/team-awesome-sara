import React, { useState } from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { Container } from "../components/Container";
import { NewTimeEntry } from "../components/NewTimeEntry/NewTimeEntry";
import { TimeEntries } from "../components/TimeEntries/TimeEntries";
import { mockTimeEntries } from "../fixtures/time-entries";

function Homepage() {
  const [timeEntries, setIsTimeEntries] = useState(mockTimeEntries);
  const addNewTimeEntry = (newTimeEntry) =>
    setIsTimeEntries([
      ...timeEntries,
      {
        id: Math.random(),
        client: newTimeEntry.client,
        startTimestamp: new Date(`${newTimeEntry.date} ${newTimeEntry.from}`).toString(),
        stopTimestamp: new Date(`${newTimeEntry.date} ${newTimeEntry.to}`).toString(),
      },
    ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <NewTimeEntry addNewTimeEntry={addNewTimeEntry} />
        <TimeEntries timeEntries={timeEntries} />
      </Container>
    </>
  );
}

export default Homepage;
