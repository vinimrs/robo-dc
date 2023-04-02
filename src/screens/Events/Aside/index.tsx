import React from 'react';
import Content from './Content';
import Header from './Header';

import { Container, Divider } from './styles';

const Aside: React.FC<{
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  filter: string[];
}> = ({ setFilter, filter }) => {
  return (
    <Container>
      <Header />
      <Divider />
      <Content setFilter={setFilter} filter={filter} />
    </Container>
  );
};

export default Aside;
