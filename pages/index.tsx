import React, { useState } from "react";

import { GlobalStyle } from "../styles/global";
import { Header } from "../components/Header/Header";
import { Container } from "../components/Container";
import { NewTimeEntryButton } from "../components/NewTimeEntry/NewTimeEntryButton";
import { TimeEntries } from "../components/TimeEntries/TimeEntries";
import { mockTimeEntries } from "../fixtures/time-entries";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { TimeEntryForm } from "../components/TimeEntryForm/TimeEntryForm";

function Homepage() {
  const [timeEntries, setTimeEntries] = useState(mockTimeEntries);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleIsFormOpen = () => setIsFormOpen(!isFormOpen);

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
        <NewTimeEntryButton handleIsFormOpen={handleIsFormOpen} isFormOpen={isFormOpen} />
        <TimeEntryForm
          handleNewTimeEntry={handleNewTimeEntry}
          isFormOpen={isFormOpen}
          onClose={handleIsFormOpen}
        />
        <TimeEntries timeEntries={timeEntries} />
      </Container>
    </>
  );
}

export default Homepage;
