import styled from "styled-components";

export const Primary = styled.button`
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: white;
  cursor: pointer;
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  margin: 24px 3px;
  padding: 9px;
  width: 344px;
`;

export const Secondary = styled(Primary)`
  background-image: linear-gradient(to top, #f2f4f7, #fff);
  border: solid 1px #ced0da;
  color: #354052;
`;
