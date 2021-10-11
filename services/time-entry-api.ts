import { TimeEntryInterface } from "../fixtures/time-entries";
import { NotFoundError } from "./not-found-error";

export async function getTimeEntries(): Promise<TimeEntryInterface[]> {
  return fetch("http://localhost:3004/time-entries?_sort=startTime&_order=asc", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 404) {
        throw new NotFoundError(response.status.toString());
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function saveTimeEntry(timeEntry: TimeEntryInterface) {
  return fetch("http://localhost:3004/time-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(timeEntry),
  })
    .then((response) => response.json())
    .catch((error) => error);
}

export async function deleteTimeEntry(id: number) {
  return fetch(`http://localhost:3004/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
}
