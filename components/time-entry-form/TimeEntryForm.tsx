import React, { useState, useRef } from "react";

import * as Styled from "./TimeEntryForm.styled";
import { Button } from "../button/Button";
import { saveTimeEntry } from "../../services/time-entry-api";
import { PageTitle } from "../page-title/PageTitle";

interface TimeEntryFormPropsInterface {
  fetchTimeEntries: Function;
  isFormOpen: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

interface NewTimeEntryInterface {
  [name: string]: string;
}

interface ValidityInterface {
  [name: string]: boolean;
}

export function TimeEntryForm({
  fetchTimeEntries,
  isFormOpen,
  onClose,
}: TimeEntryFormPropsInterface) {
  const [newTimeEntry, setNewTimeEntry] = useState<NewTimeEntryInterface>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState<ValidityInterface>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setNewTimeEntry({ ...newTimeEntry, [name]: value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    const updatedTimeEntry = {
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: new Date(`${newTimeEntry.date} ${newTimeEntry.to}`).toISOString(),
      startTime: new Date(`${newTimeEntry.date} ${newTimeEntry.from}`).toISOString(),
    };

    event.preventDefault();
    saveTimeEntry(updatedTimeEntry);
    fetchTimeEntries();
    setNewTimeEntry({});
    event.target.reset();
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputValid({ ...isInputValid, [event.target.name]: event.target.checkValidity() });
  };

  return (
    <>
      <PageTitle title="New Time Entry" />
      <Styled.TimeEntryFormWrapper isOpen={isFormOpen}>
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
              placeholder="Port of Rotterdam"
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
              placeholder="Design"
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
          <Button isDisabled={!isFormValid} tertiary>
            Add
          </Button>
        </Styled.Form>
      </Styled.TimeEntryFormWrapper>
    </>
  );
}
