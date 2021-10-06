import React from "react";

import * as Styled from "./TimeEntriesError.styled";

interface EntryErrorInterface {
  isDataError: boolean;
}

export function TimeEntriesError({ isDataError }: EntryErrorInterface) {
  return (
    <Styled.TimeEntriesError>
      {!isDataError && <p> You have no saved entries. </p>}
      {isDataError && <p>Oops, we had some trouble loading your saved time entries.</p>}
    </Styled.TimeEntriesError>
  );
}
