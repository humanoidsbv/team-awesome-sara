import React from "react";

import * as Styled from "./TeamMembersHeader.styled";
import { PageTitle } from "../page-title/PageTitle";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface TeamMembersHeaderProps {
  handleIsFormOpen: () => void;
  isFormOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setSortBy: (targetValue: string) => void;
  sortBy: string;
}

export function TeamMembersHeader({
  handleIsFormOpen,
  isFormOpen,
  setSortBy,
  sortBy,
}: TeamMembersHeaderProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <Styled.TeamMembersHeader>
        {!isFormOpen && (
          <>
            <PageTitle title="All Humanoids" />
            <Styled.NewMemberButtonWrapper>
              <Button onClick={handleIsFormOpen} type="button">
                <Icon />
                New Humanoid
              </Button>
            </Styled.NewMemberButtonWrapper>
            <select onChange={handleChange} value={sortBy}>
              <option value="date-asc">Date ↑</option>
              <option value="date-desc">Date ↓ </option>
              <option value="firstName-asc">Name ↑</option>
              <option value="firstName-desc">Name ↓</option>
            </select>
          </>
        )}

        {isFormOpen && (
          <>
            <PageTitle title="Add Humanoid" />
            <Button onClick={handleIsFormOpen} secondary type="button">
              Cancel
            </Button>
            {/* TO DO: refactor to the React way. This is the submit button for team member form. */}
            <Button form="my-form" type="submit">
              Save
            </Button>
          </>
        )}
      </Styled.TeamMembersHeader>
    </>
  );
}

export default TeamMembersHeader;
