import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { StackParamsList } from 'src/rotes/AppRotes';
import { ButtonText, Subtitle, Title } from '../styles';
import { ArrivedContainer, ButtonContainer, Button } from './styles';

type MovingScreenProps = NativeStackScreenProps<StackParamsList, 'Arrived'>;

const Arrived: React.FC<MovingScreenProps> = ({ route }) => {
  const params = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const handleArrived = () => {
    navigation.navigate('Explore');
  };

  return (
    <ArrivedContainer>
      <Title accessibilityHint="Feedback de movimentação">Chegamos!</Title>
      <Subtitle accessibilityHint="Feedback do destino">{`Consegue visualizar o(s) ${params.point.name}?`}</Subtitle>
      <ButtonContainer>
        <Button
          accessibilityHint="Botão de confirmação de destino"
          onPress={handleArrived}>
          <ButtonText>Estou vendo!</ButtonText>
        </Button>
      </ButtonContainer>
    </ArrivedContainer>
  );
};

export default Arrived;
