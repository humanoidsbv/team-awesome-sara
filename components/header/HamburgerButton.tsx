import React from "react";

import * as Styled from "./HamburgerButton.styled";

interface HamburgerButtonPropsInterface {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonPropsInterface) {
  return <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />;
}
