import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Layout from '../../components/Layout';
// import { Container } from '../styles/GlobalComponents';
import { mockUsers } from '../../common/mocks';
import List from '../../components/Lists/UsersList';
import { StackParamsList } from '../../rotes/AppRotes';
// import { View } from 'react-native';
import Header from './Header';
import Footer from '../../components/Layout/Footer';
import ContentTitle from './ContentTitle';
import { ContentContainer } from './ContentContainer';

const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  return (
    <Layout Header={Header} Footer={Footer}>
      <ContentContainer>
        <ContentTitle />
        <List
          data={mockUsers}
          accessibilityHintList="Lista de usuários"
          accessibilityHintItem="Usuário"
          navigation={navigation}
        />
      </ContentContainer>
    </Layout>
  );
};

export default Home;
