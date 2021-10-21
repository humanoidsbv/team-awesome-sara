import React, { useState } from "react";

import * as Styled from "./Header.styled";
import { HamburgerButton } from "./HamburgerButton";
import { Navigation } from "./Navigation";
import { Profile } from "./Profile";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Styled.Header data-cy="header">
      <div>
        <h1>team awesome</h1>
        <HamburgerButton isOpen={isOpen} onClick={toggleIsOpen} />
      </div>
      <Navigation isOpen={isOpen} />
      <Profile />
    </Styled.Header>
  );
}
