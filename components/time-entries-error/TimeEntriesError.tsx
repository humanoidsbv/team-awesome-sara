import React from "react";

import * as Styled from "./TimeEntriesError.styled";
import { TimeEntryInterface } from "../../fixtures/time-entries";

interface EntryErrorInterface {
  timeEntries: TimeEntryInterface[];
  isDataError: boolean;
}

export function TimeEntriesError({ isDataError, timeEntries }: EntryErrorInterface) {
  return (
    <Styled.TimeEntriesError>
      {!isDataError && timeEntries.length === 0 && <p> You have no saved entries. </p>}
      {isDataError && timeEntries.length === 0 && (
        <p>Oops, we had some trouble loading your saved time entries.</p>
      )}
    </Styled.TimeEntriesError>
  );
}
