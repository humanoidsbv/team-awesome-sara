import { TimeEntryInterface } from "../fixtures/time-entries";

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    console.log("HALLOO TEST");
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
      console.log(response.status);
      if (response.status === 404) {
        throw new NotFoundError(response);
      }

      return response;
    })
    .then((response) => response.json())
    .catch((error) => error);
}
