import styled from "styled-components";

export const NewTimeEntry = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen === true ? "none" : "flex")};
  width: 100%;

  > button {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
