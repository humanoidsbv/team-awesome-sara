import { NotFoundError } from "./not-found-error";

export async function getTeamMembers(): Promise<any> {
  return fetch("http://localhost:3004/team-members", {
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

export async function saveTeamMember(teamMember: any) {
  return fetch("http://localhost:3004/team-members", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(teamMember),
  })
    .then((response) => response.json())
    .catch((error) => error);
}
