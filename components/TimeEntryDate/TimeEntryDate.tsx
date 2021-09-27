import React from "react";

import * as Styled from "./TimeEntryDate.styled";
import { getDate } from "../../services/format/date";

interface TimeEntryDateProps {
  date: string;
}

export function TimeEntryDate({ date }: TimeEntryDateProps) {
  return <Styled.TimeEntryDate>{getDate(date)}</Styled.TimeEntryDate>;
}
