import React from "react";

import * as Styled from "./Button.styled";

interface ButtonPropsInterface {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  submit?: boolean;
}

export function Button({ children, onClick, primary, submit }: ButtonPropsInterface) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {submit && (
        <Styled.Primary onClick={onClick} type="submit">
          {children}
        </Styled.Primary>
      )}
    </>
  );
}
