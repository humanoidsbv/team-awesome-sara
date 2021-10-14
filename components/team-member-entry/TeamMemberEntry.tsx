import React, { useState } from "react";

import * as Styled from "./TeamMemberEntry.styled";
import ArrowDownIcon from "../../public/images/arrow-down2.svg";
import { TeamMemberInfo } from "../team-member-info/TeamMemberInfo";
import { TeamMemberInterface } from "../team-member-entries/TeamMemberEntries";
import { getMonthYear } from "../../services/format/date";

interface TeamMemberEntryInterface {
  teamMember: TeamMemberInterface;
}

export function TeamMemberEntry({ teamMember }: TeamMemberEntryInterface) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  const randomNumber = Math.floor(Math.random() * 100000 + 1);

  return (
    <Styled.TeamMemberEntry onClick={toggleIsOpen} isOpen={isOpen}>
      <div className="profilediv">
        <Styled.MemberProfileWrapper>
          <img
            src={`https://source.unsplash.com/random/50x50?sig=${randomNumber}`}
            alt="Team member"
          />
          <TeamMemberInfo
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
        <TeamMemberInfo isDesktop subtitle="Employee number" title={teamMember.employeeNumber} />
        <TeamMemberInfo subtitle="Current employer" title="Humanoids" />
        <TeamMemberInfo subtitle="Starting date" title={getMonthYear(teamMember.startDate)} />
      </Styled.AdditionalInfoWrapper>
    </Styled.TeamMemberEntry>
  );
}
