import React, { useContext } from "react";

import * as Styled from "./TimeEntries.styled";
import { StoreContext } from "../../contexts/StoreContext";
import { getDate } from "../../services/format/date";
import { TimeEntryDate } from "../time-entry-date/TimeEntryDate";
import { TimeEntry } from "../time-entry/TimeEntry";
import { TimeEntryInterface } from "../../fixtures/time-entries";

export interface TimeEntriesProps {
  filteredTimeEntries: TimeEntryInterface[];
  // eslint-disable-next-line no-unused-vars
  handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: number;
  // eslint-disable-next-line no-unused-vars
  onDeleteTimeEntry: (id: number) => Promise<void>;
}

export function TimeEntries({
  filteredTimeEntries,
  handleFilter,
  onDeleteTimeEntry,
}: TimeEntriesProps) {
  const [clients] = useContext(StoreContext).clients;

  return (
    <Styled.TimeEntries>
      <Styled.Select onChange={handleFilter} id="sort" name="sort">
        <option value="all-entries">All entries</option>
        {clients.map((client) => (
          <option value={client.name}>{client.name}</option>
        ))}
      </Styled.Select>
      {filteredTimeEntries.map((timeEntry, i) => {
        const currentDate = getDate(timeEntry.startTime);

        const isFirst = i === 0 || currentDate !== getDate(filteredTimeEntries[i - 1]?.startTime);
        const isLast =
          i === filteredTimeEntries.length - 1 ||
          currentDate !== getDate(filteredTimeEntries[i + 1]?.startTime);

        const isTop = isFirst && !isLast;
        const isBottom = !isFirst && isLast;
        const isCenter = !isFirst && !isLast;

        //   (client) => timeEntry.client === client.id && client.name,
        // );

        return (
          <React.Fragment key={timeEntry.id}>
            {(i === 0 || currentDate !== getDate(filteredTimeEntries[i - 1].startTime)) && (
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
