import React, { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";

import * as Styled from "./MemberEntries.styled";
import { MemberEntry } from "../member-entry/MemberEntry";
import { MembersSubheader } from "../page-subheader-container/MembersSubheader";

export interface teamMemberInterface {
  address?: string;
  bio?: string;
  city?: string;
  currentEmployer: string;
  email?: string;
  employeeNumber: string;
  firstName: string;
  id: number;
  img: string;
  lastName: string;
  role: string;
  socials?: string;
  startDate: string;
  zipcode?: string;
}

export function MemberEntries() {
  const [teamMembers] = useContext(StoreContext).teamMembers;

  return (
    <>
      <Styled.MemberEntries>
        {teamMembers.map((teamMember: teamMemberInterface) => {
          return (
            <React.Fragment key={teamMember.id}>
              <MemberEntry teamMember={teamMember} />
            </React.Fragment>
          );
        })}
      </Styled.MemberEntries>
    </>
  );
}
