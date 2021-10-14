import React from "react";
import { TeamMemberInterface } from "../team-member-entries/TeamMemberEntries";

import * as Styled from "./SearchBar.styled";

interface SearchBarInterface {
  count: string | TeamMemberInterface[];
  title: string;
  units: string;
}

export function SearchBar({ count, title, units }: SearchBarInterface) {
  return (
    <Styled.SearchBar>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <Styled.Title>{title}</Styled.Title>|
      <Styled.EntryCount>{`${count?.length} ${units}`}</Styled.EntryCount>
    </Styled.SearchBar>
  );
}
