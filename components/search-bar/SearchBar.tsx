import React from "react";
import { TimeEntryInterface } from "../../fixtures/time-entries";

import * as Styled from "./SearchBar.styled";

interface SearchBarPropsInterface {
  timeEntries: TimeEntryInterface[];
}

export function SearchBar({ timeEntries }: SearchBarPropsInterface) {
  return (
    <Styled.SearchBar>
      <Styled.Title>Timesheets</Styled.Title>|
      <Styled.EntryCount>{`${timeEntries?.length} Entries`}</Styled.EntryCount>
    </Styled.SearchBar>
  );
}
