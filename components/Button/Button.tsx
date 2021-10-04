import React from "react";

import * as Styled from "./Button.styled";

interface ButtonPropsInterface {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  submit?: boolean;
  disabled?: boolean;
  [props: string]: any;
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
        <Styled.Disabled onClick={onClick} type="submit" disabled={isDisabled} {...props}>
          {children}
        </Styled.Disabled>
      )}
    </>
  );
}
