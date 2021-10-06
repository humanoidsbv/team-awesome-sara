import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";
import { Header } from "../components/header/Header";
import { Container } from "../components/Container";
import { getTimeEntries, NotFoundError } from "../services/get-time-entries";
import { NewEntryButtonWrapper } from "../components/new-entry-button-wrapper/NewEntryButtonWrapper";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { TimeEntryInterface } from "../fixtures/time-entries";
import { SearchBar } from "../components/search-bar/SearchBar";
import { TimeEntryForm } from "../components/time-entry-form/TimeEntryForm";
import { TimeEntriesError } from "../components/time-entries-error/TimeEntriesError";

function Homepage() {
  const [timeEntries, setTimeEntries] = useState<TimeEntryInterface[]>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isDataError, setIsDataError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTimeEntries() {
      const response = await getTimeEntries();
      if (response instanceof NotFoundError) {
        setIsDataError(true);
        return;
      }
      setTimeEntries(response);
      setIsDataError(false);
    }
    fetchTimeEntries();
  }, []);

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
          {!timeEntries.length && <TimeEntriesError isDataError={isDataError} />}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Homepage;
