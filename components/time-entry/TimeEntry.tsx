import React from "react";

import * as Styled from "./TimeEntry.styled";
import { getTime } from "../../services/format/time";
import ForbidIcon from "../../public/images/forbid.svg";

interface TimeEntryPropsInterface {
  client: string;
  deleteTimeEntries: (entryId: number) => Promise<void>;
  entryId?: number;
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
  startTime: string;
  stopTime: string;
}

export function TimeEntry({
  client,
  entryId,
  deleteTimeEntries,
  isBottom,
  isCenter,
  isTop,
  startTime,
  stopTime,
}: TimeEntryPropsInterface) {
  return (
    <Styled.TimeEntry isBottom={isBottom} isCenter={isCenter} isTop={isTop}>
      <div>
        <p>{client}</p>
        <Styled.DeleteButton onClick={() => deleteTimeEntries(entryId)}>
          <ForbidIcon />
          Delete
        </Styled.DeleteButton>
      </div>
      <p>
        {/* eslint-disable */}
        {getTime(startTime)} - {getTime(stopTime)}
        {/* eslint-enable */}
      </p>
    </Styled.TimeEntry>
  );
}
