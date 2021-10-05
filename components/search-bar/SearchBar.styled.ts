import styled from "styled-components";

export const SearchBar = styled.div`
  display: none;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.borderColorPrimary};
    color: ${({ theme }) => theme.borderColorPrimary};
    column-gap: 12px;
    display: flex;
    height: 70px;
    padding: 0 36px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.onBackground};
  font-size: 18px;
  font-weight: 600;
`;

export const EntryCount = styled.p`
  color: #7f8fa4;
`;
