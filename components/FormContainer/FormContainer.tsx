import React, { useState } from "react";

import * as Styled from "./FormContainer.styled";
import { Button } from "../Button/Button";

export function FormContainer({ isOpen, onClick }) {
  const [newTimeEntry, setNewTimeEntry] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
  }

  return (
    <Styled.FormContainer isOpen={isOpen}>
      <Styled.EntryClose src="./images/close.svg" alt="close new entry menu" onClick={onClick} />
      <Styled.Form>
        <Styled.Label htmlFor="client">
          employer
          <input id="name" name="client" type="text" onChange={handleChange} required />
        </Styled.Label>
        <Styled.Label htmlFor="activity">
          activity
          <input id="activity" name="activity" type="text" onChange={handleChange} required />
        </Styled.Label>
        <Styled.Label htmlFor="date">
          date
          <input id="date" name="date" type="date" onChange={handleChange} required />
        </Styled.Label>
        <div>
          <Styled.Label>
            from
            <input name="from" type="time" onChange={handleChange} required />
          </Styled.Label>
          <Styled.Label>
            to
            <input name="to" type="time" onChange={handleChange} required />
          </Styled.Label>
        </div>
        <Button type="submit">Add</Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
}
