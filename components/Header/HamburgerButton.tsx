import React from "react";

import * as Styled from "./HamburgerButton.styled";

export function HamburgerButton({ isOpen, onClick }) {
  return <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />;
}
