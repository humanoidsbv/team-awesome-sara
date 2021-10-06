import styled from "styled-components";

interface TimeEntryWrapperProps {
  isBottom: boolean;
  isCenter: boolean;
  isTop: boolean;
}

export const TimeEntries = styled.div<{ isDataError: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    font-size: 24px;
    margin: 23px 0 0 0;
  }

  > p {
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
`;

export const TimeEntryWrapper = styled.div<TimeEntryWrapperProps>`
  border-left: solid 4px ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  width: 100%;

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

  ${(props) =>
    props.isTop &&
    `
    border-radius: 0;
    border-top-left-radius: 4px;
  `}
`;
