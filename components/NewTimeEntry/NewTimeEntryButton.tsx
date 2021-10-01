import React, { useState } from "react";

import * as Styled from "./NewTimeEntryButton.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface NewTimeEntryButtonProps {
  isFormOpen: boolean;
  handleIsFormOpen: Function;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function NewTimeEntryButton({ isFormOpen, handleIsFormOpen }: NewTimeEntryButtonProps) {
  return (
    <>
      <Styled.NewTimeEntryButton isFormOpen={isFormOpen}>
        <Button primary onClick={handleIsFormOpen}>
          <Icon />
          New time entry
        </Button>
      </Styled.NewTimeEntryButton>
    </>
  );
}
