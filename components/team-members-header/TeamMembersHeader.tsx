import React from "react";

import * as Styled from "./TeamMembersHeader.styled";
import { PageTitle } from "../page-title/PageTitle";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface TeamMembersHeaderProps {
  handleIsFormOpen: () => void;
  isFormOpen: boolean;
}

export function TeamMembersHeader({ handleIsFormOpen, isFormOpen }: TeamMembersHeaderProps) {
  return (
    <>
      <Styled.TeamMembersHeader>
        {!isFormOpen && (
          <>
            <PageTitle title="All Humanoids" />
            <Styled.NewMemberButtonWrapper>
              <Button onClick={handleIsFormOpen}>
                <Icon />
                New Humanoid
              </Button>
            </Styled.NewMemberButtonWrapper>
            <select id="sort" name="sort">
              <option value="name">Sort by</option>
            </select>
          </>
        )}

        {isFormOpen && (
          <>
            <PageTitle title="Add Humanoid" />
            <Button onClick={handleIsFormOpen} secondary>
              Cancel
            </Button>
            <Button form="my-form">Save</Button>
          </>
        )}
      </Styled.TeamMembersHeader>
    </>
  );
}

export default TeamMembersHeader;
