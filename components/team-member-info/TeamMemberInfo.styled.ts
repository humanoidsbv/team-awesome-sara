import styled from "styled-components";

export const TeamMemberInfo = styled.div<{ isDesktop: boolean }>`
  display: ${(props) => (props.isDesktop ? "none" : "inline")};

  @media (${({ theme }) => theme.desktop}) {
    display: inline;
  }

  p {
    color: #354052;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-align: left;
  }
  span {
    color: #7f8fa4;
    font-size: 14px;
  }
`;
