import React from 'react';
import { Container } from '../../styles/GlobalComponents';
import { Content } from './styles';
// import Footer from './Footer';
// import Header from './Header';
// import { Container } from './styles';

const Layout: React.FC<
  React.PropsWithChildren<{
    Header: React.ComponentType;
    Footer: React.ComponentType;
    larger?: boolean;
  }>
> = ({ children, Header, Footer, larger }) => {
  return (
    <Container larger={larger}>
      <Header />
      <Content larger={larger}>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
