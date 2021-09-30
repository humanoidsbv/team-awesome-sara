import React from "react";

import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  secondary?: boolean;
  submitButton?: boolean;
}

export function Button({ children, onClick, primary, secondary, submitButton }: ButtonProps) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {secondary && <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>}
      {submitButton && (
        <Styled.SubmitButton onClick={onClick} type="submit">
          {children}
        </Styled.SubmitButton>
      )}
    </>
  );
}
