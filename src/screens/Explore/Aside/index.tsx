import React from 'react';
import Content from './Content';
import Header from './Header';

import { Container, Divider } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header />
      <Divider />
      <Content />
    </Container>
  );
};

export default Aside;
