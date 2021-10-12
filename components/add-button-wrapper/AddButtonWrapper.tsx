import React from "react";

import * as Styled from "./AddButtonWrapper.styled";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface AddButtonWrapperPropsInterface {
  isFormOpen?: boolean;
  handleIsFormOpen?: () => void;
  title: string;
}

export function AddButtonWrapper({
  isFormOpen,
  handleIsFormOpen,
  title,
}: AddButtonWrapperPropsInterface) {
  return (
    <Styled.AddButtonWrapper isFormOpen={isFormOpen}>
      <Button onClick={handleIsFormOpen} primary>
        <Icon />
        {title}
      </Button>
    </Styled.AddButtonWrapper>
  );
}
