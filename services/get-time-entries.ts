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

export const saveTimeEntry = async (data: TimeEntryInterface) => {
  return fetch("http://localhost:3004/time-entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export const deleteTimeEntry = async (id: number) => {
  return fetch(`http://localhost:3004/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};
