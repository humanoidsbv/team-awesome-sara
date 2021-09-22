import React from "react";
import { NewTimeEntry } from "./NewTimeEntry/NewTimeEntry";
import { TimeEntries } from "./TimeEntries/TimeEntries";

export function TimeEntriesPage() {
  return (
    <>
      <NewTimeEntry />
      <TimeEntries />
    </>
  );
}
