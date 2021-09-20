import styled from "styled-components";

export const Profile = styled.button`
  display: none;

  @media (min-width: 1024px) {
    background: url("/images/humanoids-logo.png") no-repeat center #fff;
    background-position: 20px;
    background-size: 65px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: flex-end;
    position: relative;
    width: 135px;
  }

  > img {
    @media (min-width: 1024px) {
      background-color: sandybrown;
      border-radius: 50%;
      height: 32px;
      margin: 2px;
      width: 32px;
    }
  }
`;
