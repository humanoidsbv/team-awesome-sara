import * as Styled from '../styles/HamburgerButton.styled';

export function HamburgerButton ({ isOpen, onClick }) {
  return (
    <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />
  )
}
