import * as Styled from '../styles/Header.styled';
import React, { useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { Navigation } from './Navigation';
import { ProfileButton } from './ProfileButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  
  return (
    <Styled.Header isOpen={isOpen}>
      <div>
          <h1>team awesome</h1>
          <HamburgerButton isOpen={isOpen} onClick={toggleIsOpen}/>
      </div>
      <Navigation isOpen={isOpen}/>
      <ProfileButton />
    </Styled.Header>
  )
}
