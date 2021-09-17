import * as Styled from '../styles/HamburgerButton.styled';

const HamburgerButton = ({isOpen, onClick}) => {
  return (
    <Styled.HamburgerButton isOpen={isOpen} onClick={onClick} />
  )
}

export default HamburgerButton;
