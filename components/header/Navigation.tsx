import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as Styled from "./Navigation.styled";

interface NavigationPropsInterface {
  isOpen: boolean;
}

export function Navigation({ isOpen }: NavigationPropsInterface) {
  return (
    <Styled.Navigation data-cy="navigation" isOpen={isOpen}>
      <Link href="/">
        <li className={useRouter().pathname === "/" ? "active" : ""}>Timesheets</li>
      </Link>
      <Link href="/team-members">
        <li className={useRouter().pathname === "/team-members" ? "active" : ""}>Team Members</li>
      </Link>
      <li>Projects</li>
      <li>Clients</li>
      <li>Documents</li>
    </Styled.Navigation>
  );
}
