import React from 'react';
import Content from './Content';
import Header from './Header';

import { Container, Divider } from './styles';

const Aside: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setFilter }) => {
  return (
    <Container>
      <Header />
      <Divider />
      <Content setFilter={setFilter} />
    </Container>
  );
};

export default Aside;
