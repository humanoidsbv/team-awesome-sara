import styled from "styled-components";

export const HamburgerButton = styled.button<{ isOpen: boolean }>`
  background: url(${(props) => props.isOpen === false ? "./images/hamburger.svg" : "./images/cross.svg"}) no-repeat center;
  border: none;
  cursor: pointer;
  height: 21px;
  padding: 3px;
  position: absolute;
  right: 15px;
  width: 22px;
`;
