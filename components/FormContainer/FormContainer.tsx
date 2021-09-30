import React, { useState, useRef } from "react";

import * as Styled from "./FormContainer.styled";
import { Button } from "../Button/Button";

interface FormContainerProps {
  handleNewTimeEntry: any; // wat is hier een betere type voor?
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function FormContainer({ handleNewTimeEntry, isOpen, onClick }: FormContainerProps) {
  const [newTimeEntry, setNewTimeEntry] = useState<Object>({});
  const formRef = useRef<HTMLFormElement>(null);

  const [formValidation, setFormValidation] = useState<any>({});
  // const [isInputValid, setIsInputValid] = useState({
  //   client: true,
  //   activity: true,
  //   date: true,
  //   from: true,
  //   to: true,
  // });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewTimeEntry(newTimeEntry);
    event.target.reset();
  };

  const checkValidation = (event) => {
    const validation = { ...formValidation, [event.target.name]: event.target.checkValidity() };
    setFormValidation(validation);
  };

  return (
    <Styled.FormContainer isOpen={isOpen}>
      <Styled.CloseButton onClick={onClick}>
        <img src="./images/close.svg" alt="Close new entry menu" />
      </Styled.CloseButton>
      <Styled.Form onSubmit={handleSubmit} ref={formRef}>
        <Styled.Label htmlFor="client">
          employer
          <Styled.Input
            id="name"
            invalid={formValidation.client !== false}
            // isInputValid={isInputValid.client}
            name="client"
            onBlur={checkValidation}
            onChange={handleChange}
            required
            type="text"
          />
        </Styled.Label>
        <Styled.Label htmlFor="activity">
          activity
          <Styled.Input
            id="activity"
            invalid={formValidation.activity !== false}
            // isInputValid={isInputValid.activity}
            name="activity"
            onBlur={checkValidation}
            onChange={handleChange}
            required
            type="text"
          />
        </Styled.Label>
        <Styled.Label htmlFor="date">
          date
          <Styled.Input
            id="date"
            invalid={formValidation.date !== false}
            // isInputValid={isInputValid.date}
            name="date"
            onBlur={checkValidation}
            onChange={handleChange}
            required
            type="date"
          />
        </Styled.Label>
        <div>
          <Styled.Label htmlFor="from">
            from
            <Styled.Input
              invalid={formValidation.from !== false}
              // isInputValid={isInputValid.from}
              name="from"
              onBlur={checkValidation}
              onChange={handleChange}
              required
              type="time"
            />
          </Styled.Label>
          <Styled.Label htmlFor="to">
            to
            <Styled.Input
              invalid={formValidation.to !== false}
              // isInputValid={isInputValid.to}
              name="to"
              onBlur={checkValidation}
              onChange={handleChange}
              required
              type="time"
            />
          </Styled.Label>
        </div>
        <Button submitButton>Add</Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
}
