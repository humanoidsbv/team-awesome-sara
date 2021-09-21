import React from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";

export function NewTimeEntry() {
  const toggleEntryMenu = () => alert("ik start een nieuwe time entry");
  const addNewEntry = () => alert("ik add em");

  return (
    <>
      <Button type="Primary" onClick={toggleEntryMenu}>
        <Icon />
        New time entry
      </Button>
      <Button type="Primary" onClick={addNewEntry}>
        Add
      </Button>
    </>
  );
}
