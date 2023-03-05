import { Footer, Header } from '@global';
import React from 'react';
import Layout from '../../components/Layout';
import ListPoints from './ListPoints';
import { ContentContainer } from './styles';

// import { Container } from './styles';

const Explore: React.FC = () => {
  return (
    <Layout
      Header={() => <Header larger={true} title="Explore o DC" />}
      Footer={Footer}
      larger={true}>
      <ContentContainer>
        <ListPoints />
      </ContentContainer>
    </Layout>
  );
};

export default Explore;
