import React from "react";

import * as Styled from "./TimeEntry.styled";
import { getTime } from "../../services/format/time";

interface TimeEntryPropsInterface {
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
}: TimeEntryPropsInterface) {
  return (
    <Styled.TimeEntry isBottom={isBottom} isCenter={isCenter} isTop={isTop}>
      <p>{client}</p>
      <p>
        {/* eslint-disable */}
        {getTime(startTime)} - {getTime(stopTime)}
        {/* eslint-enable */}
      </p>
    </Styled.TimeEntry>
  );
}
