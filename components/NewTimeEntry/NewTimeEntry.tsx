import React, { useState } from "react";

import * as Styled from "./NewTimeEntry.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { FormContainer } from "../FormContainer/FormContainer";

export function NewTimeEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Styled.NewTimeEntry isOpen={isOpen}>
        <Button styleBtn="Primary" onClick={handleIsOpen}>
          <Icon />
          New time entry
        </Button>
      </Styled.NewTimeEntry>
      <FormContainer isOpen={isOpen} onClick={handleIsOpen} />
    </>
  );
}

// dus default: isOpen = false, want FormContainer is dicht.
