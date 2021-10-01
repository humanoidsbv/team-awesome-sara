import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  submit?: boolean;
}

export function Button({ children, onClick, primary, submit }: ButtonProps) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {submit && (
        <Styled.Submit onClick={onClick} type="submit">
          {children}
        </Styled.Submit>
      )}
    </>
  );
}
