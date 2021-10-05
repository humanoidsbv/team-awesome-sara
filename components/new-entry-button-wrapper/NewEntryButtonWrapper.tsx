import React from "react";

import * as Styled from "./NewEntryButtonWrapper.styled";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface NewEntryButtonWrapperPropsInterface {
  isFormOpen: boolean;
  handleIsFormOpen: () => void;
}

export function NewEntryButtonWrapper({
  isFormOpen,
  handleIsFormOpen,
}: NewEntryButtonWrapperPropsInterface) {
  return (
    <Styled.NewEntryButtonWrapper isFormOpen={isFormOpen}>
      <Button primary onClick={handleIsFormOpen}>
        <Icon />
        New time entry
      </Button>
    </Styled.NewEntryButtonWrapper>
  );
}
