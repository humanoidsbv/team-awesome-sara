import React, { useState } from "react";
import * as Styled from "../styles/Header.styled";
import { HamburgerButton } from "./HamburgerButton";
import { Navigation } from "./Navigation";
import { ProfileButton } from "./ProfileButton";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Styled.Header>
      <div>
        <h1>team awesome</h1>
        <HamburgerButton isOpen={isOpen} onClick={toggleIsOpen} />
      </div>
      <Navigation isOpen={isOpen} />
      <ProfileButton />
    </Styled.Header>
  );
}
