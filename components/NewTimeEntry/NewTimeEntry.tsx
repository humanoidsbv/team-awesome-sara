import React from "react";

import * as Styled from "./NewTimeEntry.styled";
import { Button } from "../Button/Button";
import { Icon } from "../Button/Icon";

export function NewTimeEntry() {
  const toggleEntryMenu = () => alert("ik start een nieuwe time entry");
  const addNewEntry = () => alert("ik add");

  return (
    <Styled.NewTimeEntry>
      <Button type="Primary" onClick={toggleEntryMenu}>
        <Icon />
        New time entry
      </Button>
      <Button type="Primary" onClick={addNewEntry}>
        Add
      </Button>
    </Styled.NewTimeEntry>
  );
}
