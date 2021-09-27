import styled from "styled-components";

export const EntryCard = styled.div<{ borderPosition: string }>`
  align-items: center;
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  display: flex;
  height: 82px;
  justify-content: space-between;
  overflow: hidden;
  padding: 16px;
  width: 100%;

  > p {
    font-size: 18px;
    font-weight: 600;
  }

  ${(props) =>
    props.borderPosition === "isTop" &&`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}

  ${(props) =>
    props.borderPosition === "isBottom" &&`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
  `}

  ${(props) =>
    props.borderPosition === "isCenter" &&`
    border-top: none;
  `}

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;
