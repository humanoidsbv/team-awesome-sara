import React from "react";

import * as Styled from "./Button.styled";

interface ButtonPropsInterface {
  [props: string]: unknown;
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  secondary?: boolean;
  submit?: boolean;
}

export function Button({
  children,
  isDisabled,
  onClick,
  secondary,
  ...props
}: ButtonPropsInterface) {
  return (
    <Styled.Button
      disabled={isDisabled}
      onClick={onClick}
      secondary={secondary}
      type="submit"
      {...props}
    >
      {children}
    </Styled.Button>
  );
}
