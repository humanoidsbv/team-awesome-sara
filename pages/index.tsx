import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

import { Header } from "../components/header/Header";
import { Container } from "../components/Container";
import { getTimeEntries, deleteTimeEntry } from "../services/time-entry-api";
import { NotFoundError } from "../services/not-found-error";
import { NewEntryButtonWrapper } from "../components/new-entry-button-wrapper/NewEntryButtonWrapper";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { SearchBar } from "../components/search-bar/SearchBar";
import { TimeEntryForm } from "../components/time-entry-form/TimeEntryForm";
import { TimeEntriesError } from "../components/time-entries-error/TimeEntriesError";

function Homepage() {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isDataError, setIsDataError] = useState<boolean>(false);

  const fetchTimeEntries = async () => {
    const response = await getTimeEntries();
    if (response instanceof NotFoundError) {
      setIsDataError(true);
      return;
    }
    setTimeEntries(response);
    setIsDataError(false);
  };

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleIsFormOpen = () => setIsFormOpen(!isFormOpen);

  const handleDeleteTimeEntry = async (id: number) => {
    await deleteTimeEntry(id);
    fetchTimeEntries();
  };

  return (
    <>
      <Header />
      <SearchBar />
      <Container>
        <NewEntryButtonWrapper handleIsFormOpen={handleIsFormOpen} isFormOpen={isFormOpen} />
        <TimeEntryForm
          fetchTimeEntries={fetchTimeEntries}
          isFormOpen={isFormOpen}
          onClose={handleIsFormOpen}
        />
        <TimeEntries onDeleteTimeEntry={handleDeleteTimeEntry} />
        {!timeEntries.length && <TimeEntriesError isDataError={isDataError} />}
      </Container>
    </>
  );
}

export default Homepage;
