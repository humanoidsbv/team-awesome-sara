import { TimeEntryInterface } from "../fixtures/time-entries";

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Error";
  }
}

export async function getTimeEntries(): Promise<TimeEntryInterface[]> {
  return fetch("http://localhost:3004/time-entries", {
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
