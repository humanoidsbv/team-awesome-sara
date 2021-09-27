import React from "react";

import * as Styled from "./TimeEntries.styled";
import { mockTimeEntries } from "../../fixtures/time-entries";
import { getDate } from "../../services/format/date";
import { TimeEntryDate } from "../TimeEntryDate/TimeEntryDate";
import { TimeEntry } from "../TimeEntry/TimeEntry";

export function TimeEntries() {
  const timeEntries = [...mockTimeEntries].sort((a, b) =>
    getDate(a.startTimestamp) > getDate(b.startTimestamp) ? 1 : -1,
  );
  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, i, array) => {
        const currentDate = getDate(timeEntry.startTimestamp);

        const isFirst = i === 0 || currentDate !== getDate(array[i - 1]?.startTimestamp);
        const isLast =
          i === array.length - 1 || currentDate !== getDate(array[i + 1]?.startTimestamp);

        const isTop = isFirst && !isLast;
        const isBottom = !isFirst && isLast;
        const isCenter = !isFirst && !isLast;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== getDate(timeEntries[i - 1].startTimestamp)) && (
              <TimeEntryDate date={timeEntry.startTimestamp} />
            )}
            <Styled.TimeEntryWrapper isTop={isTop} isBottom={isBottom} isCenter={isCenter}>
              <TimeEntry
                isTop={isTop}
                isBottom={isBottom}
                isCenter={isCenter}
                client={timeEntry.client}
                startTime={timeEntry.startTimestamp}
                stopTime={timeEntry.stopTimestamp}
              />
            </Styled.TimeEntryWrapper>
          </React.Fragment>
        );
      })}
    </Styled.TimeEntries>
  );
}
