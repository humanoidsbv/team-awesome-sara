import styled from "styled-components";

export const TimeEntry = styled.div<{ isTop: boolean; isBottom: boolean; isCenter: boolean }>`
  align-items: center;
  border: solid 1px #e6eaee;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  height: 82px;
  justify-content: space-between;
  overflow: hidden;
  padding: 16px;
  width: 100%;
  border-left: none;

  > p {
    font-size: 18px;
    font-weight: 600;
  }

  ${(props) =>
    props.isTop &&
    `
    border-radius: 0;
    border-top-right-radius: 4px;
  `}

  ${(props) =>
    props.isBottom &&
    `
    border-radius: 0;
    border-bottom-right-radius: 4px;
    border-top: 0;
  `}

  ${(props) =>
    props.isCenter &&
    `
    border-top: 0;
    border-radius: 0;
  `}

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;
