import React from "react";

import * as Styled from "./EntryCard.styled";
import { getTime } from "../../../../services/format/time";

interface EntryCardProps {
  borderPosition: string;
  client: string;
  startTime: string;
  stopTime: string;
}

export function EntryCard({ borderPosition, client, startTime, stopTime }: EntryCardProps) {
  return (
    <Styled.EntryCard borderPosition={borderPosition}>
      <p>{client}</p>
      <p>
        {getTime(startTime)} - {getTime(stopTime)}
      </p>
    </Styled.EntryCard>
  );
}
