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

  const randomNumber = Math.floor(Math.random() * 100000 + 1);

  return (
    <Styled.MemberEntry onClick={toggleIsOpen} isOpen={isOpen}>
      <div className="profilediv">
        <Styled.MemberProfileWrapper>
          <img
            src={`https://source.unsplash.com/random/50x50?sig=${randomNumber}`}
            alt="Team member"
          />
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
        <MemberInfo isInvisible subtitle="Employee number" title={teamMember.employeeNumber} />
        <MemberInfo subtitle="Current employer" title="Humanoids" />
        <MemberInfo
          subtitle="Starting date"
          title={new Date(teamMember.startDate).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        />
      </Styled.AdditionalInfoWrapper>
    </Styled.MemberEntry>
  );
}
