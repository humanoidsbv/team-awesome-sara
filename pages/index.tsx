import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

import { Header } from "../components/header/Header";
import { Container } from "../components/Container";
import { getTimeEntries, deleteTimeEntry } from "../services/time-entry-api";
import { NotFoundError } from "../services/not-found-error";
import { AddButtonWrapper } from "../components/add-button-wrapper/AddButtonWrapper";
import { TimeEntries } from "../components/time-entries/TimeEntries";
import { SearchBar } from "../components/search-bar/SearchBar";
import { TimeEntryForm } from "../components/time-entry-form/TimeEntryForm";
import { TimeEntriesError } from "../components/time-entries-error/TimeEntriesError";

function Homepage() {
  const [timeEntries, setTimeEntries] = useContext(StoreContext).timeEntries;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDataError, setIsDataError] = useState(false);

  const fetchTimeEntries = async () => {
    setIsDataError(false);
    const response = await getTimeEntries();
    if (response instanceof NotFoundError) {
      setIsDataError(true);
      return;
    }
    setTimeEntries(response);
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
      <SearchBar count={timeEntries} units="Entries" title="Timesheets" />
      <Container>
        <AddButtonWrapper
          title="New time entry"
          handleIsFormOpen={handleIsFormOpen}
          isFormOpen={isFormOpen}
        />
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
