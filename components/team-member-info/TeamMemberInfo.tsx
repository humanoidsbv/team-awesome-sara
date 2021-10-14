import React from "react";

import * as Styled from "./TeamMemberInfo.styled";

interface TeamMemberInfoProps {
  desktopOnly?: boolean;
  subtitle: string;
  title: string;
}

export function TeamMemberInfo({ desktopOnly, subtitle, title }: TeamMemberInfoProps) {
  return (
    <Styled.TeamMemberInfo desktopOnly={desktopOnly}>
      <p>{title}</p>
      <p>
        <span>{subtitle}</span>
      </p>
    </Styled.TeamMemberInfo>
  );
}
