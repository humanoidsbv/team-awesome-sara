import styled from "styled-components";

export const Button = styled.button<{ disabled: boolean; secondary: boolean }>`
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border: solid 1px #249533;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  padding: 9px;
  width: 100%;

  > div > svg {
    fill: #b0edb8;
  }

  ${(props) =>
    props.secondary &&
    `
    background-image: none;
    background-color: #f5f7f9;
    border: solid 1px #ced0da;
    color: #4b5464;
  `}

  ${(props) =>
    props.disabled &&
    `
    align-items: center;
    background-image: none;
    background-color: #39b54a;
    border: none;

    :disabled {
      background-color: #e6eaee;
      border: 1px solid #999999;
      color: #68768c;
    }
  `}
`;
