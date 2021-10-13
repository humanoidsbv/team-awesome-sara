import styled from "styled-components";

export const MembersSubheader = styled.div`
  align-items: flex-end;
  column-gap: 12px;
  display: flex;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  > h1 {
    margin: 0;
  }

  > select {
    display: none;
    height: 36px;
    padding: 0 4px;

    @media (${({ theme }) => theme.desktop}) {
      display: inline;
    }
  }

  > button {
    width: 156px;
  }
`;

export const NewMemberButtonWrapper = styled.div`
  width: 100%;

  > button {
    @media (${({ theme }) => theme.desktop}) {
      margin-left: auto;
      width: 156px;
    }
  }
`;
