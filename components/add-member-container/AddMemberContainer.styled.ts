import styled from "styled-components";

export const AddMemberContainer = styled.div`
  align-items: center;
  border: solid 1px ${({ theme }) => theme.borderColorPrimary};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-left: solid 4px ${({ theme }) => theme.primaryColor};
  border-top-right-radius: 4px;
  column-gap: 40px;
  display: flex;
  height: 100%;
  margin-top: 50px;
  padding: 30px;
  position: relative;
  width: 100%;

  .tab-container {
    border-left: solid 4px ${({ theme }) => theme.primaryColor};
    border-top-left-radius: 4px;
    height: 50px;
    left: -4px;
    position: absolute;
    top: -50px;
    width: 100%;
  }

  .tab {
    align-items: center;
    background-color: white;
    border: solid 1px ${({ theme }) => theme.borderColorPrimary};
    border-bottom: solid 1px #ffffff;
    border-top-right-radius: 4px;
    display: flex;
    font-size: 18px;
    height: 50px;
    justify-content: center;
    left: 0px;
    padding: 0 33px;
    position: relative;
    width: fit-content;
  }
`;

export const ProfilePicture = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 10px;

  img {
    border-radius: 50%;
    height: 100px;
    object-fit: cover;
    width: 100px;
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;
  width: 100%;

  .div-form-left {
    border-right: 1px solid #dfe3e9;
    padding-right: 30px;
  }

  .div-form-right {
    padding: 0 30px;
  }

  .full-name-div {
    column-gap: 10px;
    display: flex;
  }

  .zipcode-city {
    column-gap: 10px;
    display: flex;
  }
`;

export const Label = styled.label`
  color: #7f8fa4;
  text-align: left;
  width: 100%;
`;

export const Input = styled.input`
  border: solid 1px #dfe3e9;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  height: 36px;
  margin-bottom: 18px;
  margin-top: 8px;
  outline: none;
  padding: 8px 12px;
  text-align: left;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: solid 1px #dfe3e9;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
  outline: none;
  padding: 8px 12px;
  text-align: left;
  width: 100%;
`;
