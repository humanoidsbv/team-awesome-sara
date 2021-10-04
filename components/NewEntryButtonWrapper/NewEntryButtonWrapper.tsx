import React from "react";

import * as Styled from "./NewEntryButtonWrapper.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

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
