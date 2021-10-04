import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;

  @media (min-width: 1024px) {
    margin: 32px 200px;
  }
`;
