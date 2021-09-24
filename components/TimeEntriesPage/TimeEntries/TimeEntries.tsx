import React from "react";

import * as Styled from "./TimeEntries.styled";
import { timeEntries } from "../../../fixtures/time-entries";
import { getDate } from "../../../services/Format/Date";
import { EntryDate } from "./EntryDate/EntryDate";
import { EntryCard } from "./EntryCard/EntryCard";

export function TimeEntries() {
  return (
    <Styled.TimeEntries>
      {timeEntries.map((timeEntry, i, array) => {
        const currDate = getDate(timeEntry.startTimestamp);

        const firstInList = i === 0 || currDate !== getDate(array[i - 1]?.startTimestamp);
        const lastInList =
          i === array.length - 1 || currDate !== getDate(array[i + 1]?.startTimestamp);

        const isTop = firstInList && !lastInList;
        const isBottom = !firstInList && lastInList;
        const isCenter = !firstInList && !lastInList;

        const borderState = isTop
          ? "isTop"
          : isBottom
          ? "isBottom"
          : isCenter
          ? "isCenter"
          : "isSingle";

        return (
          <>
            {(i === 0 || currDate !== getDate(timeEntries[i - 1].startTimestamp)) && (
              <EntryDate date={timeEntry.startTimestamp} />
            )}

            <EntryCard
              key={timeEntry.id}
              client={timeEntry.client}
              startTime={timeEntry.startTimestamp}
              stopTime={timeEntry.stopTimestamp}
              borderState={borderState}
            />
          </>
        );
      })}
    </Styled.TimeEntries>
  );
}
