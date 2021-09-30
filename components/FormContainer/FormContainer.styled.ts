import styled from "styled-components";

export const FormContainer = styled.div<{ isOpen: boolean }>`
  background-color: #f5f8fa;
  border: solid 1px #e6eaee;
  border-radius: 4px;
  display: ${(props) => (props.isOpen === false ? "none" : "flex")};
  flex-direction: column;
  padding: 16px;
  position: relative;
  row-gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: flex-end;
    column-gap: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  div {
    column-gap: 16px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 245px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    align-items: flex-end;
    column-gap: 14px;
    flex-direction: row;
  }

  button {
    align-items: center;
    background-color: #35ac45;
    background-image: none;
    border: none;
    color: white;
    margin: 24px 0 16px 0;

    @media (min-width: 1024px) {
      margin: 0;
      width: 20%;
    }
  }
`;

export const Label = styled.label`
  color: #68768c;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  width: 100%;

  input {
    background-image: linear-gradient(to top, #f2f4f7, #fff);
    border: solid 1px #ced0da;
    border-radius: 4px;
    font-weight: bold;
    height: 36px;
    margin-top: 12px;
    padding: 8px 16px;
    text-align: left;
    width: 100%;
  }

  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const EntryClose = styled.button`
  background: transparent;
  border: none;
  color: #354052;
  cursor: pointer;
  position: absolute;
  right: 16px;

  @media (min-width: 1024px) {
    display: none;
  }

  img {
    height: 10px;
    height: 10px;
  }
`;
