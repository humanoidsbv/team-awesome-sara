import styled from "styled-components";

export const EntryCard = styled.div<{ borderState: string }>`
  align-items: center;
  border-left: solid 4px #4f88ef;
  border: solid 1px #e6eaee;
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
    props.borderState === "isTop" &&
    `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}

  ${(props) =>
    props.borderState === "isBottom" &&
    `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
  `}

  ${(props) =>
    props.borderState === "isCenter" &&
    `
    border-top: none;
  `}

  ${(props) =>
    props.borderState === "isSingle" &&
    `
    border-radius: 4px;
  `}

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;
