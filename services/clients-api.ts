import { ClientsInterface } from "../fixtures/time-entries";
import { NotFoundError } from "./not-found-error";

export async function getClients(): Promise<ClientsInterface> {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/clients`, {
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
