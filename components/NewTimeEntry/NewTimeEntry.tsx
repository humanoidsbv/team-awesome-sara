import React, { useState } from "react";

import * as Styled from "./NewTimeEntry.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { FormContainer } from "../FormContainer/FormContainer";

interface NewTimeEntryProps {
  handleNewTimeEntry: Object;
}

export function NewTimeEntry({ handleNewTimeEntry }: NewTimeEntryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Styled.NewTimeEntry isOpen={isOpen}>
        <Button primary onClick={handleIsOpen}>
          <Icon />
          New time entry
        </Button>
        <h1>New Time Entry</h1>
      </Styled.NewTimeEntry>
      <FormContainer
        handleNewTimeEntry={handleNewTimeEntry}
        isOpen={isOpen}
        onClick={handleIsOpen}
      />
    </>
  );
}
