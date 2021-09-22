import React from "react";

import * as Styled from "./TimeEntry.styled";
import { EntryContainer } from "./EntryContainer/EntryContainer";

export function TimeEntry({ client, date, startTime, stopTime }) {
  return (
    <Styled.TimeEntry>
      <Styled.EntryTitle>{date}</Styled.EntryTitle>
      <EntryContainer client={client} startTime={startTime} stopTime={stopTime} />
    </Styled.TimeEntry>
  );
}

// <EntryContainer client={item.client} timeStart={item.startTime} timeStop={item.stopTime} />; */
