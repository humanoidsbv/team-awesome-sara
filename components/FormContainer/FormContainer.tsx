import React, { useState, useRef } from "react";

import * as Styled from "./FormContainer.styled";
import { Button } from "../Button/Button";

interface FormContainerProps {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleNewTimeEntry: any; // wat is hier een betere type voor?
}

export function FormContainer({ handleNewTimeEntry, isOpen, onClick }: FormContainerProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<Object>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange({ target }) {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
    setIsFormValid(formRef.current?.checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleNewTimeEntry(newTimeEntry);
    event.target.reset();
  }

  return (
    <Styled.FormContainer isOpen={isOpen}>
      <Styled.EntryClose onClick={onClick}>
        <img src="./images/close.svg" alt="close new entry menu" />
      </Styled.EntryClose>
      <Styled.Form onSubmit={handleSubmit} ref={formRef} isValid={isFormValid}>
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
