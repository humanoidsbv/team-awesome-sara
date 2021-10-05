import { TimeEntryInterface } from "../fixtures/time-entries";

export async function getTimeEntries(): Promise<TimeEntryInterface[]> {
  const response = await fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
