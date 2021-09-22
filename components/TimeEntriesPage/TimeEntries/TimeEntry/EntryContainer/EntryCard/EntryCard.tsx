import React from "react";
import * as Styled from "./EntryCard.styled";

export function EntryCard({ client, startTime, stopTime }) {
  return (
    <Styled.EntryCard>
      <p>{client}</p>
      <p>
        {startTime} - {stopTime}
      </p>
    </Styled.EntryCard>
  );
}
