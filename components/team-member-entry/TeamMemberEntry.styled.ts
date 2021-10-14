import styled from "styled-components";

export const TeamMemberEntry = styled.div<{ isOpen: boolean }>`
  align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
  border: solid 1px ${({ theme }) => theme.borderColorPrimary};
  border-radius: 4px;
  border-left: solid 4px ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  height: fit-content;
  justify-content: space-between;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    flex-direction: row;
    max-height: 84px;
  }

  .profilediv {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    width: 100%;

    @media (${({ theme }) => theme.desktop}) {
      padding: 32px;
    }
  }

  svg {
    margin-left: auto;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};

    @media (${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
`;

export const MemberProfileWrapper = styled.div`
  align-items: center;
  column-gap: 25px;
  display: flex;

  img {
    border-radius: 50%;
    height: 50px;
    object-fit: cover;
    width: 50px;
  }
`;

export const DetailedInfoDiv = styled.div<{ isOpen: boolean }>`
  background-color: #f5f8fa;
  border-bottom: solid 1px #e6eaee;
  border-top: solid 1px #e6eaee;
  display: ${(props) => (props.isOpen ? "inline" : "none")};
  padding: 16px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }

  > p {
    color: #7f8fa4;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }
`;

export const AdditionalInfoWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  padding: 16px;
  row-gap: 16px;
  width: 80%;

  @media (${({ theme }) => theme.desktop}) {
    column-gap: 54px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 32px;
  }
`;
