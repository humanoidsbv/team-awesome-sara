import React from "react";

import * as Styled from "./SearchBar.styled";

interface SearchBarProps {
  timeEntries: any;
}

export function SearchBar({ timeEntries }: SearchBarProps) {
  return (
    <Styled.SearchBar>
      <Styled.Title>Timesheets</Styled.Title>
      |
      <Styled.EntryCount>{`${timeEntries.length} Entries`}</Styled.EntryCount>
    </Styled.SearchBar>
  );
}
