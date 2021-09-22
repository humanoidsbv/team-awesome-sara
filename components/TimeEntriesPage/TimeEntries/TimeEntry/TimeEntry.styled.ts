import styled from "styled-components";

export const TimeEntry = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0 0 0;

  @media (min-width: 1024px) {
    font-size: 24px;
    font-weight: 400;
    margin: 23px 0 0 0;
  }
`;

export const EntryTitle = styled.h1`
  color: #7f8fa4;
  font-family: ProximaNova;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 24px;
    font-weight: 400;
  }
`;
