import React from "react";

import * as Styled from "./PageContainer.styled";
import { NewTimeEntry } from "./NewTimeEntry/NewTimeEntry";

export function PageContainer() {
  return (
    <Styled.PageContainer>
      <NewTimeEntry />
    </Styled.PageContainer>
  );
}
