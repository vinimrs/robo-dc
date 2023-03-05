import { Footer, Header } from '@global';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Layout from '../../components/Layout';
import { StackParamsList } from '../../rotes/AppRotes';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  InfoContainer,
  PointDescription,
  PointImage,
  PointTitle,
  ScrollContainer,
} from './styles';

// import { Container } from './styles';

type PointScreenProps = NativeStackScreenProps<StackParamsList, 'Point'>;

const Point: React.FC<PointScreenProps> = ({ route }) => {
  const params = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const handlePress = () => {
    navigation.navigate('Movement', { point: params.point });
  };

  return (
    <Layout Header={() => <Header title={params.point.name} />} Footer={Footer}>
      <ScrollContainer>
        <Container>
          <View>
            <PointImage source={params.point.image} />
          </View>
          <InfoContainer>
            <PointTitle accessibilityHint="Nome do ponto do DC">
              {params.point.name}
            </PointTitle>
            <PointDescription accessibilityHint="Descrição do ponto do DC">
              {params.point.description}
            </PointDescription>
          </InfoContainer>
        </Container>
        <ButtonContainer>
          <Button
            onPress={handlePress}
            accessibilityHint="Botão de ir para o local">
            <ButtonText>Ir para o local</ButtonText>
          </Button>
        </ButtonContainer>
      </ScrollContainer>
    </Layout>
  );
};

export default Point;
