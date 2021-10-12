import React from "react";

import * as Styled from "./PageSubheaderWrapper.styled";
import { PageTitle } from "../page-title/PageTitle";
import { AddButtonWrapper } from "../add-button-wrapper/AddButtonWrapper";

export function PageSubheaderWrapper() {
  return (
    <>
      <Styled.PageSubheaderWrapper>
        <PageTitle title="All Humanoids" />
        <AddButtonWrapper title="New Humanoid" />
        <select id="sort" name="sort">
          <option value="name">Sort by</option>
        </select>
      </Styled.PageSubheaderWrapper>
    </>
  );
}

export default PageSubheaderWrapper;
