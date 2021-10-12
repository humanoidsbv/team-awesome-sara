import React, { useState } from "react";

import * as Styled from "./MemberEntry.styled";
import ArrowDownIcon from "../../public/images/arrow-down2.svg";
import { MemberInfo } from "../member-info/MemberInfo";
import { teamMemberInterface } from "../member-entries/MemberEntries";

interface MemberEntryInterface {
  teamMember: teamMemberInterface;
}

export function MemberEntry({ teamMember }: MemberEntryInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Styled.MemberEntry onClick={toggleIsOpen} isOpen={isOpen}>
      <div className="profilediv">
        <Styled.MemberProfileWrapper>
          <img src={teamMember.img} alt="Team member" />
          <MemberInfo
            title={`${teamMember.firstName} ${teamMember.lastName}`}
            subtitle={teamMember.role}
          />
        </Styled.MemberProfileWrapper>
        <ArrowDownIcon />
      </div>
      <Styled.DetailedInfoDiv isOpen={isOpen}>
        <p>{`Detailed information about ${teamMember.firstName}`}</p>
      </Styled.DetailedInfoDiv>
      <Styled.AdditionalInfoWrapper isOpen={isOpen}>
        <MemberInfo isInvisible title={teamMember.employeeNumber} subtitle="Employee number" />
        <MemberInfo title={teamMember.currentEmployer} subtitle="Current employer" />
        <MemberInfo
          title={new Date(teamMember.startDate).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
          subtitle="Starting date"
        />
      </Styled.AdditionalInfoWrapper>
    </Styled.MemberEntry>
  );
}
