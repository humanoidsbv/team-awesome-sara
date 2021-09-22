import React from "react";

import * as Styled from "./EntryContainer.styled";
import { EntryCard } from "./EntryCard/EntryCard";

export function EntryContainer({ client, startTime, stopTime }) {
  return (
    <Styled.EntryContainer>
      <EntryCard client={client} startTime={startTime} stopTime={stopTime} />
    </Styled.EntryContainer>
  );
}
