import React from "react";

import * as Styled from "./PageTitle.styled";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return <Styled.PageTitle>{title}</Styled.PageTitle>;
}
