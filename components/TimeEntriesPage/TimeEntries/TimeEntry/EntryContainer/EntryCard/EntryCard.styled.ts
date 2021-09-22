import styled from "styled-components";

export const EntryCard = styled.div`
  align-items: center;
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  display: flex;
  height: 82px;
  justify-content: space-between;
  overflow: hidden;
  padding: 16px;
  width: 100%;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
  }

  &:only-child {
    border: solid 1px #e6eaee;
    border-left: solid 4px #4f88ef;
  }

  > p {
    font-size: 18px;
    font-weight: 600;
  }
`;
