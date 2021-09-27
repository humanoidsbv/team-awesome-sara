import React from "react";

import * as Styled from "./EntryDate.styled";
import { getDate } from "../../../../services/format/date";

interface EntryDateProps {
  date: string;
}

export function EntryDate({ date }: EntryDateProps) {
  return <Styled.EntryDate>{getDate(date)}</Styled.EntryDate>;
}
