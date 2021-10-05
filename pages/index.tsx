import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";
import { Header } from "../components/Header/Header";
import { Container } from "../components/Container";
import { NewEntryButtonWrapper } from "../components/NewEntryButtonWrapper/NewEntryButtonWrapper";
import { TimeEntries } from "../components/TimeEntries/TimeEntries";
import { TimeEntryInterface, mockTimeEntries } from "../fixtures/time-entries";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { TimeEntryForm } from "../components/TimeEntryForm/TimeEntryForm";

function Homepage() {
  const [timeEntries, setTimeEntries] = useState<TimeEntryInterface[]>(mockTimeEntries);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleIsFormOpen = () => setIsFormOpen(!isFormOpen);

  const handleNewTimeEntry = (newTimeEntry: TimeEntryInterface) =>
    setTimeEntries([...timeEntries, newTimeEntry]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <SearchBar timeEntries={timeEntries} />
        <Container>
          <NewEntryButtonWrapper handleIsFormOpen={handleIsFormOpen} isFormOpen={isFormOpen} />
          <TimeEntryForm
            handleNewTimeEntry={handleNewTimeEntry}
            isFormOpen={isFormOpen}
            onClose={handleIsFormOpen}
          />
          <TimeEntries timeEntries={timeEntries} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Homepage;
