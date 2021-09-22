import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 24px;

  @media (min-width: 1024px) {
    margin: 24px 200px;
  }
`;
