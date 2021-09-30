import styled from "styled-components";

export const NewTimeEntry = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen === true ? "none" : "flex")};
  width: 100%;

  > button {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  h1 {
    display: none;

    @media (min-width: 1024px) {
      display: inline;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 25px;
    }
  }
`;
