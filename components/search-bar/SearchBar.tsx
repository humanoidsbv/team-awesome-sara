import React, { useContext } from "react";

import * as Styled from "./SearchBar.styled";

import { StoreContext } from "../../contexts/StoreContext";

export function SearchBar() {
  const state = useContext(StoreContext);
  const [timeEntries] = state.timeEntries;

  return (
    <Styled.SearchBar>
      <Styled.Title>Timesheets</Styled.Title>|
      <Styled.EntryCount>{`${timeEntries?.length} Entries`}</Styled.EntryCount>
    </Styled.SearchBar>
  );
}
