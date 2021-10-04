import React from "react";

import * as Styled from "./TimeEntryDate.styled";
import { getDate } from "../../services/format/date";

interface TimeEntryDatePropsInterface {
  date: string;
}

export function TimeEntryDate({ date }: TimeEntryDatePropsInterface) {
  return <Styled.TimeEntryDate>{getDate(date)}</Styled.TimeEntryDate>;
}
