import { Footer, Header } from '../../styles/GlobalComponents';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Layout from '../../components/Layout';
import { mockFeatures, mockUsers } from '../../common/mocks';
import List from '../../components/Lists/FeaturesList';
import { StackParamsList } from '../../rotes/AppRotes';
import ContentTitle from './ContentTitle';

// import { Container } from './styles';

type FeaturesScreenProps = NativeStackScreenProps<StackParamsList, 'Features'>;

const Features: React.FC<FeaturesScreenProps> = ({ route }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();
  const params = route?.params || { userRole: 'Visitante' };

  const data = mockFeatures.map(feature => ({
    ...feature,
    src: mockUsers.find(user => user.name === params.userRole).src,
  }));

  return (
    <Layout Header={() => <Header />} Footer={Footer}>
      <ContentTitle userRole={params.userRole} />
      <List
        data={data}
        accessibilityHintList="Lista de funcionalidades"
        accessibilityHintItem="Funcionalidade"
        navigation={navigation}
        // headerTitle={params.userRole}
      />
    </Layout>
  );
};

export default Features;
