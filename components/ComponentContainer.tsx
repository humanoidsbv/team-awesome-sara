import React from "react";

import * as Styled from "./ComponentContainer.styled";
import { NewTimeEntry } from "./NewTimeEntry/NewTimeEntry";
import { TimeEntries } from "./TimeEntries/TimeEntries";

export function ComponentContainer() {
  return (
    <Styled.ComponentContainer>
      <NewTimeEntry />
      <TimeEntries />
    </Styled.ComponentContainer>
  );
}
