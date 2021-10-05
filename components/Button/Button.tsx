import React from "react";

import * as Styled from "./Button.styled";

interface ButtonPropsInterface {
  [props: string]: unknown | any;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  submit?: boolean;
}

export function Button({
  children,
  isDisabled,
  onClick,
  primary,
  secondary,
  ...props
}: ButtonPropsInterface) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {secondary && (
        <Styled.Disabled disabled={isDisabled} onClick={onClick} type="submit" {...props}>
          {children}
        </Styled.Disabled>
      )}
    </>
  );
}
