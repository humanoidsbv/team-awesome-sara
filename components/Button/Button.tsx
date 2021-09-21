import React from "react";
import * as Styled from "../../styles/Button.styled";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "Primary" | "Secondary";
  children: React.ReactNode;
}

export function Button({ onClick, children, type = "Primary" }: ButtonProps) {
  return (
    <>
      {type === "Primary" ? (
        <Styled.Primary onClick={onClick}>{children}</Styled.Primary>
      ) : (
        <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>
      )}
    </>
  );
}
