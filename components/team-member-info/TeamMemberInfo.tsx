import React from "react";

import * as Styled from "./TeamMemberInfo.styled";

interface TeamMemberInfoProps {
  isInvisible?: boolean;
  subtitle: string;
  title: string;
}

export function TeamMemberInfo({ isInvisible, subtitle, title }: TeamMemberInfoProps) {
  return (
    <Styled.TeamMemberInfo isInvisible={isInvisible}>
      <p>{title}</p>
      <p>
        <span>{subtitle}</span>
      </p>
    </Styled.TeamMemberInfo>
  );
}
