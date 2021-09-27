import styled from "styled-components";

export const TimeEntries = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    font-size: 24px;
    margin: 23px 0 0 0;
  }
`;

export const TimeEntryWrapper = styled.div<{
  isTop: boolean;
  isBottom: boolean;
  isCenter: boolean;
}>`
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  width: 100%;

  ${(props) =>
    props.isTop &&
    `
    border-radius: 0;
    border-top-left-radius: 4px;
  `}

  ${(props) =>
    props.isBottom &&
    `
    border-radius: 0;
    border-bottom-left-radius: 4px;
  `}

  ${(props) =>
    props.isCenter &&
    `
    border-radius: 0;
  `}
`;
