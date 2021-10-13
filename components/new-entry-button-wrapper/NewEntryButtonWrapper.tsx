import React from "react";

import * as Styled from "./NewEntryButtonWrapper.styled";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface NewEntryButtonWrapperInterface {
  handleIsFormOpen?: () => void;
  isFormOpen?: boolean;
  title: string;
}

export function NewEntryButtonWrapper({
  handleIsFormOpen,
  isFormOpen,
  title,
}: NewEntryButtonWrapperInterface) {
  return (
    <Styled.NewEntryButtonWrapper isFormOpen={isFormOpen}>
      <Button onClick={handleIsFormOpen} primary>
        <Icon />
        {title}
      </Button>
    </Styled.NewEntryButtonWrapper>
  );
}
