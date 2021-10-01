import React, { useState, useRef, HtmlHTMLAttributes } from "react";

import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../Button/Button";

interface TimeEntryFormProps {
  handleNewTimeEntry: any;
  isFormOpen: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export function TimeEntryForm({ handleNewTimeEntry, isFormOpen, onClose }: TimeEntryFormProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<Object>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<any>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTimeEntry(newTimeEntry);
    event.target.reset();
  };

  const handleBlur = (event) => {
    setIsInputValid({ ...isInputValid, [event.target.name]: event.target.checkValidity() });
  };

  return (
    <>
      <Styled.Title>New Time Entry</Styled.Title>
      <Styled.TimeEntryForm isOpen={isFormOpen}>
        <Styled.CloseButton onClick={onClose}>
          <img src="./images/close.svg" alt="Close new entry menu" />
        </Styled.CloseButton>
        <Styled.Form isFormValid={isFormValid} onSubmit={handleSubmit} ref={formRef}>
          <Styled.Label htmlFor="client">
            employer
            <Styled.Input
              id="name"
              invalid={isInputValid.client !== false}
              name="client"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="text"
            />
          </Styled.Label>
          <Styled.Label htmlFor="activity">
            activity
            <Styled.Input
              id="activity"
              invalid={isInputValid.activity !== false}
              name="activity"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="text"
            />
          </Styled.Label>
          <Styled.Label htmlFor="date">
            date
            <Styled.Input
              id="date"
              invalid={isInputValid.date !== false}
              name="date"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="date"
            />
          </Styled.Label>
          <div>
            <Styled.Label htmlFor="from">
              from
              <Styled.Input
                invalid={isInputValid.from !== false}
                name="from"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="time"
              />
            </Styled.Label>
            <Styled.Label htmlFor="to">
              to
              <Styled.Input
                invalid={isInputValid.to !== false}
                name="to"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="time"
              />
            </Styled.Label>
          </div>
          <Button submit disabled={!isFormValid}>
            Add
          </Button>
        </Styled.Form>
      </Styled.TimeEntryForm>
    </>
  );
}
