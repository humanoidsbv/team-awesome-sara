import React from "react";

import * as Styled from "./HamburgerButton.styled";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />;
}
