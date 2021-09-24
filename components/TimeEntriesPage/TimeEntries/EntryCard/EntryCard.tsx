import React from "react";

import * as Styled from "./EntryCard.styled";
import { getTime } from "../../../../services/Format/Time";

interface EntryCardProps {
  borderState: string;
  client: string;
  startTime: string;
  stopTime: string;
}

export function EntryCard({ borderState, client, startTime, stopTime }: EntryCardProps) {
  return (
    <Styled.EntryCard borderState={borderState}>
      <p>{client}</p>
      <p>
        {getTime(startTime)} - {getTime(stopTime)}
      </p>
    </Styled.EntryCard>
  );
}
