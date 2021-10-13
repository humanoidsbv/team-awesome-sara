import React from "react";

import * as Styled from "./Button.styled";

interface ButtonPropsInterface {
  [props: string]: unknown;
  children: React.ReactNode;
  isDisabled?: boolean;
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
  tertiary,
  ...props
}: ButtonPropsInterface) {
  return (
    <>
      {primary && <Styled.Primary onClick={onClick}>{children}</Styled.Primary>}
      {secondary && <Styled.Secondary onClick={onClick}>{children}</Styled.Secondary>}
      {tertiary && (
        <Styled.Disabled disabled={isDisabled} onClick={onClick} type="submit" {...props}>
          {children}
        </Styled.Disabled>
      )}
    </>
  );
}
