import React from 'react';
import { HeaderContainer } from '../../../styles/GlobalComponents';
import Logo from '../../../components/Layout/Logo';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
