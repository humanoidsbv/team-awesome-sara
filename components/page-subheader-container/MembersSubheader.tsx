import React from "react";

import * as Styled from "./MembersSubheader.styled";
import { PageTitle } from "../page-title/PageTitle";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

export function MembersSubheader({ handleIsFormOpen, isFormOpen }: any) {
  return (
    <>
      {!isFormOpen && (
        <Styled.MembersSubheader>
          <PageTitle title="All Humanoids" />
          <Styled.NewMemberButtonWrapper>
            <Button onClick={handleIsFormOpen} primary>
              <Icon />
              New Humanoid
            </Button>
          </Styled.NewMemberButtonWrapper>
          <select id="sort" name="sort">
            <option value="name">Sort by</option>
          </select>
        </Styled.MembersSubheader>
      )}

      {isFormOpen && (
        <Styled.MembersSubheader>
          <PageTitle title="Add Humanoid" />
          <Button onClick={handleIsFormOpen} secondary>
            Cancel
          </Button>
          <Button form="my-form" tertiary>
            Save
          </Button>
        </Styled.MembersSubheader>
      )}
    </>
  );
}

export default MembersSubheader;
