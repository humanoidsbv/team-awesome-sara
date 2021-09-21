import React from "react";
import * as Styled from "../../styles/Header/Navigation.styled";

interface NavigationProps {
  isOpen: boolean;
}

export function Navigation({ isOpen }: NavigationProps) {
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
