import React from "react";

import * as Styled from "./PageContainer.styled";
import { TimeEntriesPage } from "./TimeEntriesPage/TimeEntriesPage";

export function PageContainer() {
  return (
    <Styled.PageContainer>
      <TimeEntriesPage />
    </Styled.PageContainer>
  );
}
