import styled from "styled-components";

export const Header = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${({ theme }) => theme.desktop}) {
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    padding: 0 46px 0 30px;
  }

  > div {
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 12px;
    width: 100%;

    @media (${({ theme }) => theme.desktop}) {
      display: none;
    }
  }

  div > h1 {
    color: white;
    font-family: Bello Script;
    font-size: 29px;
    font-weight: 400;
  }
`;
