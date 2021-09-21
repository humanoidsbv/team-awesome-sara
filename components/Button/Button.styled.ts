import styled from "styled-components";

export const Primary = styled.button`
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: white;
  cursor: pointer;
  display: flex;
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  margin-bottom: 20px;
  padding: 9px;
  width: 100%;

  > div > svg {
    fill: #b0edb8;
  }
`;

export const Secondary = styled(Primary)`
  background-image: linear-gradient(to top, #f2f4f7, #fff);
  border: solid 1px #ced0da;
  color: #354052;
  > div > svg {
    fill: #000;
  }
`;
