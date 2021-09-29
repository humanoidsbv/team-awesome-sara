import React, { useState } from "react";

import * as Styled from "./FormContainer.styled";
import { Button } from "../Button/Button";

export function FormContainer({ addNewTimeEntry, isOpen, onClick }) {
  const [newTimeEntry, setNewTimeEntry] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewTimeEntry(newTimeEntry);
  }

  return (
    <Styled.FormContainer isOpen={isOpen}>
      <Styled.EntryClose src="./images/close.svg" alt="close new entry menu" onClick={onClick} />
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor="client">
          employer
          <input id="name" name="client" onChange={handleChange} required type="text" />
        </Styled.Label>
        <Styled.Label htmlFor="activity">
          activity
          <input id="activity" name="activity" onChange={handleChange} required type="text" />
        </Styled.Label>
        <Styled.Label htmlFor="date">
          date
          <input id="date" name="date" onChange={handleChange} required type="date" />
        </Styled.Label>
        <div>
          <Styled.Label>
            from
            <input name="from" onChange={handleChange} required type="time" />
          </Styled.Label>
          <Styled.Label>
            to
            <input name="to" onChange={handleChange} required type="time" />
          </Styled.Label>
        </div>
        <Button tertiary>Add</Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
}
