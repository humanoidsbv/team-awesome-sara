import styled from "styled-components";

export const PageSubheaderWrapper = styled.div`
  column-gap: 12px;
  display: flex;
  width: 100%;
  align-items: flex-end;

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

  button {
    @media (${({ theme }) => theme.desktop}) {
      display: flex;
      width: 156px;
      margin-left: auto;
    }
  }
`;
