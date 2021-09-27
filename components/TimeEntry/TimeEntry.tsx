import React from "react";

import * as Styled from "./TimeEntry.styled";
import { getTime } from "../../services/format/time";

interface TimeEntryProps {
  client: string;
  isTop: boolean;
  isBottom: boolean;
  isCenter: boolean;
  startTime: string;
  stopTime: string;
}

export function TimeEntry({
  client,
  isBottom,
  isTop,
  isCenter,
  startTime,
  stopTime,
}: TimeEntryProps) {
  return (
    <Styled.TimeEntry isBottom={isBottom} isCenter={isCenter} isTop={isTop}>
      <p>{client}</p>
      <p>
        {getTime(startTime)} - {getTime(stopTime)}
      </p>
    </Styled.TimeEntry>
  );
}
