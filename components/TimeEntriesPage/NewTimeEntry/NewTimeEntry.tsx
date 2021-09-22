import React from "react";

import * as Styled from "./NewTimeEntry.styled";
import { Button } from "../../Button/Button";
import { Icon } from "../../Icon/Icon";

export function NewTimeEntry() {
  const toggleEntryMenu = () => alert("ik start een nieuwe time entry");

  return (
    <Styled.NewTimeEntry>
      <Button type="Primary" onClick={toggleEntryMenu}>
        <Icon />
        New time entry
      </Button>
    </Styled.NewTimeEntry>
  );
}
