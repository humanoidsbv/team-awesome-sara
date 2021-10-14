import styled from "styled-components";

export const NewEntryButtonWrapper = styled.div<{ isFormOpen: boolean }>`
  display: ${(props) => (props.isFormOpen ? "none" : "flex")};
  width: 100%;

  /* > button {
    @media (${({ theme }) => theme.desktop}) {
      display: none;
    }
  } */
`;
