import styled from 'styled-components';

export const Navigation = styled.ul`
  align-items: center;
  color: white;
  display: ${(props) => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  font-family: ProximaNova;
  font-size: 24px;
  font-weight: 600;
  height: ${(props) => props.isOpen ? '100' : '0'}vh;
  margin-top: 60px;
  row-gap: 44px;

  @media (min-width: 1024px) {
    column-gap: 50px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin: 0;
  }

  > li {
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
      
    @media (min-width: 1024px) {
      margin: 0;
      padding: 8px;
    }
  }

  > li:hover {
    background-color: #1166a5;
  }
`;
