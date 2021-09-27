import React from "react";

import * as Styled from "./TimeEntries.styled";
import { timeEntries } from "../../../fixtures/time-entries";
import { getDate } from "../../../services/format/date";
import { EntryDate } from "./EntryDate/EntryDate";
import { EntryCard } from "./EntryCard/EntryCard";

export function TimeEntries() {
  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, i, array) => {
        const currDate = getDate(timeEntry.startTimestamp);

        const isFirst = i === 0 || currDate !== getDate(array[i - 1]?.startTimestamp);
        const isLast = i === array.length - 1 || currDate !== getDate(array[i + 1]?.startTimestamp);

        const isTop = isFirst && !isLast;
        const isBottom = !isFirst && isLast;
        const isCenter = !isFirst && !isLast;

        const borderPosition = isTop ? "isTop" : isBottom ? "isBottom" : isCenter && "isCenter";

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currDate !== getDate(timeEntries[i - 1].startTimestamp)) && (
              <EntryDate date={timeEntry.startTimestamp} />
            )}

            <EntryCard
              borderPosition={borderPosition}
              client={timeEntry.client}
              startTime={timeEntry.startTimestamp}
              stopTime={timeEntry.stopTimestamp}
            />
          </React.Fragment>
        );
      })}
    </Styled.TimeEntries>
  );
}
