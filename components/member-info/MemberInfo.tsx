import React from "react";

import * as Styled from "./MemberInfo.styled";

export function MemberInfo({ title, subtitle, isInvisible }: any) {
  return (
    <Styled.MemberInfo isInvisible={isInvisible}>
      <p>{title}</p>
      <p>
        <span>{subtitle}</span>
      </p>
    </Styled.MemberInfo>
  );
}
