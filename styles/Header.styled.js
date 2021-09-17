import styled from 'styled-components';

export const Header = styled.nav`
  align-items: center;
  background-color: #4f88ef;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 50px;
    justify-content: space-between;
    padding: 0 46px 0 30px;
    flex-direction: row;
  }
    
  > div {
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    padding: 12px;
    position: relative;
    width: 100%;
    
    @media (min-width: 1024px) {
      display: none;
    }
  }

  div > h1 {
    color: white;
    font-family: Bello Script;
    font-size: 29px;
    font-weight: 400;
  }
`;
