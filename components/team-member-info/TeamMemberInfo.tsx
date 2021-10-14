import React from "react";

import * as Styled from "./TeamMemberInfo.styled";

interface TeamMemberInfoProps {
  isDesktop?: boolean;
  subtitle: string;
  title: string;
}

export function TeamMemberInfo({ isDesktop, subtitle, title }: TeamMemberInfoProps) {
  return (
    <Styled.TeamMemberInfo isDesktop={isDesktop}>
      <p>{title}</p>
      <p>
        <span>{subtitle}</span>
      </p>
    </Styled.TeamMemberInfo>
  );
}
