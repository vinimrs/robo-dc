import React from 'react';
import Layout from '../../components/Layout';
import ListEvents from './ListEvents';
import { Footer, Header } from '../../styles/GlobalComponents';
import { ContentContainer } from './styles';
import Aside from './Aside';

const Events: React.FC = () => {
  const [filter, setFilter] = React.useState<string[] | undefined>(undefined);

  return (
    <Layout
      Header={() => <Header larger={true} title="Eventos do DC" />}
      Footer={Footer}
      larger={true}>
      <Aside setFilter={setFilter} />
      <ContentContainer>
        <ListEvents filter={filter} />
      </ContentContainer>
    </Layout>
  );
};

export default Events;
