import styled from "styled-components";

interface TimeEntryProps {
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
}

export const TimeEntry = styled.div<TimeEntryProps>`
  align-items: center;
  border: solid 1px #e6eaee;
  border-bottom-right-radius: 4px;
  border-left: none;
  border-top-right-radius: 4px;
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
    props.isBottom &&
    `
    border-radius: 0;
    border-bottom-right-radius: 4px;
    border-top: 0;
  `}

  ${(props) =>
    props.isCenter &&
    `
    border-radius: 0;
    border-top: 0;
  `}

   ${(props) =>
    props.isTop &&
    `
    border-radius: 0;
    border-top-right-radius: 4px;
  `}

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;
