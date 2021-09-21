import React from "react";
import * as Styled from "../../styles/Header/HamburgerButton.styled";

export function HamburgerButton({ isOpen, onClick }) {
  return <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />;
}
