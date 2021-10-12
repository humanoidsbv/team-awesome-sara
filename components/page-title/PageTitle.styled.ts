import styled from "styled-components";

export const PageTitle = styled.h1`
  display: none;

  @media (${({ theme }) => theme.desktop}) {
    color: #354052;
    display: inline;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 25px;
    text-align: left;
    width: 100%;
  }
`;
