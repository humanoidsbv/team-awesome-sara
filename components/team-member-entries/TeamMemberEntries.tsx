import React, { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";

import * as Styled from "./TeamMemberEntries.styled";
import { TeamMemberEntry } from "../team-member-entry/TeamMemberEntry";

export interface TeamMemberInterface {
  address?: string;
  bio?: string;
  currentEmployer?: string;
  date?: string;
  emailAddress?: string;
  employeeNumber?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  locality?: string;
  postalCode?: string;
  role?: string;
  socials?: string;
}

export function TeamMemberEntries() {
  const [teamMembers] = useContext(StoreContext).teamMembers;

  return (
    <Styled.TeamMemberEntries>
      {teamMembers.map((teamMember: TeamMemberInterface) => (
        <React.Fragment key={teamMember.id}>
          <TeamMemberEntry teamMember={teamMember} />
        </React.Fragment>
      ))}
    </Styled.TeamMemberEntries>
  );
}
