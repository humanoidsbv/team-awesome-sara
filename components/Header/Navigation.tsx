import React from "react";

import * as Styled from "./Navigation.styled";

interface NavigationPropsInterface {
  isOpen: boolean;
}

export function Navigation({ isOpen }: NavigationPropsInterface) {
  return (
    <Styled.Navigation isOpen={isOpen}>
      <li>Timesheets</li>
      <li>Team Members</li>
      <li>Projects</li>
      <li>Clients</li>
      <li>Documents</li>
    </Styled.Navigation>
  );
}
