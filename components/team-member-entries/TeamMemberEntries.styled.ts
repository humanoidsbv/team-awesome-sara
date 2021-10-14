import styled from "styled-components";

export const TeamMemberEntries = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  row-gap: 20px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    cursor: unset;
    margin: 0;
  }

  p {
    color: #354052;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  }
  span {
    color: #7f8fa4;
    font-size: 14px;
  }
`;
