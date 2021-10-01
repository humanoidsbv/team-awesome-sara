import styled from "styled-components";

export const NewTimeEntryButton = styled.div<{ isFormOpen: boolean }>`
  display: ${(props) => (props.isFormOpen ? "none" : "flex")};
  width: 100%;

  > button {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
