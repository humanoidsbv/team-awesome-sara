import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;

  @media (${({ theme }) => theme.desktop}) {
    margin: 32px 100px;
  }
`;
