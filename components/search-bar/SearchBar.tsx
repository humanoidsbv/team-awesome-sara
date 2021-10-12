import React from "react";

import * as Styled from "./SearchBar.styled";

interface SearchBarInterface {
  count: string | [] | any;
  title: string;
  units: string;
}

export function SearchBar({ count, title, units }: SearchBarInterface) {
  return (
    <Styled.SearchBar>
      <Styled.Title>{title}</Styled.Title>|
      <Styled.EntryCount>{`${count?.length} ${units}`}</Styled.EntryCount>
    </Styled.SearchBar>
  );
}
