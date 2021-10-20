import { NotFoundError } from "./not-found-error";
import { TeamMemberInterface } from "../components/team-member-entries/TeamMemberEntries";

export async function getTeamMembers(sortBy: string): Promise<TeamMemberInterface[]> {
  const order = sortBy.split("-")[1];
  const sort = sortBy.split("-")[0];

  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members?_sort=${sort}&_order=${order}`, {
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

export async function saveTeamMember(teamMember: TeamMemberInterface) {
  return fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(teamMember),
  })
    .then((response) => response.json())
    .catch((error) => error);
}
