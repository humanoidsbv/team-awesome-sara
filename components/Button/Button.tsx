import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  styleBtn: "Primary" | "Secondary";
}

export function Button({ children, onClick, styleBtn }: ButtonProps) {
  return (
    <>
      {styleBtn === "Primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>
      )}
    </>
  );
}
