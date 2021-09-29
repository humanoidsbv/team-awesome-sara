import React, { useState } from "react";

import * as Styled from "./NewTimeEntry.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { FormContainer } from "../FormContainer/FormContainer";

interface NewTimeEntryProps {
  addNewTimeEntry: Object;
}

export function NewTimeEntry({ addNewTimeEntry }: NewTimeEntryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Styled.NewTimeEntry isOpen={isOpen}>
        <Button primary onClick={handleIsOpen}>
          <Icon />
          New time entry
        </Button>
      </Styled.NewTimeEntry>
      <FormContainer isOpen={isOpen} onClick={handleIsOpen} addNewTimeEntry={addNewTimeEntry} />
    </>
  );
}
