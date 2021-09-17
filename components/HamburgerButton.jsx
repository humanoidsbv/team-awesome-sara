import * as Styled from '../styles/HamburgerButton.styled';

export const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />
  )
}
