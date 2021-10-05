import React from "react";

import * as Styled from "./Container.styled";

interface ContainerInterface {
  children: React.ReactNode | React.ReactNode[];
}

export function Container({ children }: ContainerInterface) {
  return <Styled.Container>{children}</Styled.Container>;
}
