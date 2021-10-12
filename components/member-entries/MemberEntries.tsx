import React, { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";

import * as Styled from "./MemberEntries.styled";
import { MemberEntry } from "../member-entry/MemberEntry";

export interface teamMemberInterface {
  firstName: string;
  lastName: string;
  img: string;
  role: string;
  employeeNumber: string;
  currentEmployer: string;
  startDate: string;
  id: number;
}

export function MemberEntries() {
  const [teamMembers] = useContext(StoreContext).teamMembers;

  return (
    <Styled.MemberEntries>
      {[...teamMembers].map((teamMember) => {
        return (
          <React.Fragment key={teamMember.id}>
            <MemberEntry teamMember={teamMember} />
          </React.Fragment>
        );
      })}
    </Styled.MemberEntries>
  );
}
