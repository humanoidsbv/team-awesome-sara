import React, { useContext } from "react";

import * as Styled from "./TimeEntries.styled";
import { StoreContext } from "../../contexts/StoreContext";
import { getDate } from "../../services/format/date";
import { TimeEntryDate } from "../time-entry-date/TimeEntryDate";
import { TimeEntry } from "../time-entry/TimeEntry";

export interface TimeEntriesProps {
  id?: number;
  onDeleteTimeEntry: (id: number) => Promise<void>;
}

export function TimeEntries({ onDeleteTimeEntry }: TimeEntriesProps) {
  const [timeEntries] = useContext(StoreContext).timeEntries;

  return (
    <Styled.TimeEntries>
      {[...timeEntries].map((timeEntry, i) => {
        const currentDate = getDate(timeEntry.startTime);

        const isFirst = i === 0 || currentDate !== getDate(timeEntries[i - 1]?.startTime);
        const isLast =
          i === timeEntries.length - 1 || currentDate !== getDate(timeEntries[i + 1]?.startTime);

        const isTop = isFirst && !isLast;
        const isBottom = !isFirst && isLast;
        const isCenter = !isFirst && !isLast;

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== getDate(timeEntries[i - 1].startTime)) && (
              <TimeEntryDate date={timeEntry.startTime} />
            )}
            <Styled.TimeEntryWrapper isTop={isTop} isBottom={isBottom} isCenter={isCenter}>
              <TimeEntry
                client={timeEntry.client}
                id={timeEntry.id}
                isBottom={isBottom}
                isCenter={isCenter}
                isTop={isTop}
                onDeleteTimeEntry={onDeleteTimeEntry}
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
