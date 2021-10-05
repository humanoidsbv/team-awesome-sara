import styled from "styled-components";

export const Navigation = styled.ul<{ isOpen: boolean }>`
  align-items: center;
  color: white;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  font-family: ProximaNova;
  font-size: 24px;
  font-weight: 600;
  height: ${(props) => (props.isOpen ? "100" : "0")}vh;
  margin-top: 60px;
  row-gap: 44px;

  @media (${({ theme }) => theme.desktop}) {
    column-gap: 50px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin: 0;
  }

  > li {
    border-radius: 5px;
    cursor: pointer;
    padding: 4px 13px;
    width: fit-content;

    @media (${({ theme }) => theme.desktop}) {
      margin: 0;
      padding: 8px;
    }
  }

  > li:hover {
    background-color: #1166a5;
  }
`;
