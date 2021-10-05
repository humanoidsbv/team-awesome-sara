import React from "react";

import * as Styled from "./TimeEntries.styled";
import { getDate } from "../../services/format/date";
import { TimeEntryDate } from "../TimeEntryDate/TimeEntryDate";
import { TimeEntry } from "../TimeEntry/TimeEntry";
import { TimeEntryInterface } from "../../fixtures/time-entries";

interface TimeEntriesProps {
  timeEntries: TimeEntryInterface[];
}

export function TimeEntries({ timeEntries }: TimeEntriesProps) {
  const sortedTimeEntries = [...timeEntries].sort((a, b) => (a.startTime > b.startTime ? 1 : -1));
  return (
    <Styled.TimeEntries>
      {sortedTimeEntries.map((timeEntry, i) => {
        const currentDate = getDate(timeEntry.startTime);

        const isFirst = i === 0 || currentDate !== getDate(sortedTimeEntries[i - 1]?.startTime);
        const isLast =
          i === sortedTimeEntries.length - 1 ||
          currentDate !== getDate(sortedTimeEntries[i + 1]?.startTime);

        const isTop = isFirst && !isLast;
        const isBottom = !isFirst && isLast;
        const isCenter = !isFirst && !isLast;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== getDate(sortedTimeEntries[i - 1].startTime)) && (
              <TimeEntryDate date={timeEntry.startTime} />
            )}
            <Styled.TimeEntryWrapper isTop={isTop} isBottom={isBottom} isCenter={isCenter}>
              <TimeEntry
                client={timeEntry.client}
                isBottom={isBottom}
                isCenter={isCenter}
                isTop={isTop}
                startTime={timeEntry.startTime}
                stopTime={timeEntry.endTime}
              />
            </Styled.TimeEntryWrapper>
          </React.Fragment>
        );
      })}
    </Styled.TimeEntries>
  );
}
