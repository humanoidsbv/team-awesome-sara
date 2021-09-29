import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export function Button({ children, onClick, primary, secondary, tertiary }: ButtonProps) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {secondary && <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>}
      {tertiary && (
        <Styled.Tertiary onClick={onClick} type="submit">
          {children}
        </Styled.Tertiary>
      )}
    </>
  );
}
