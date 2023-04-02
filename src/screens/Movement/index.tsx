import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StackParamsList } from '../../rotes/AppRotes';
import { robotServices } from '../../services/robotServices';

import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Subtitle,
  Title,
} from './styles';

type MovementScreenProps = NativeStackScreenProps<StackParamsList, 'Movement'>;

const Movement: React.FC<MovementScreenProps> = ({ route }) => {
  const [loading, setLoading] = React.useState(false);

  const params = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const handleNavigateToMoving = async () => {
    setLoading(true);
    const res = await robotServices.moveTo(params.point.name);

    if (res.ok) {
      setLoading(false);
      navigation.navigate('Moving', { point: params.point });
    }
  };

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Title accessibilityHint="Feedback para começar">{`Irei te acompanhar até o ${params.point.name}!`}</Title>
      <Subtitle>Podemos começar?</Subtitle>
      <ButtonContainer>
        <Button
          accessibilityHint="Botão de cancelar passeio"
          onPress={handleNavigateBack}>
          <ButtonText>Cancelar</ButtonText>
        </Button>
        <Button
          positive={true}
          accessibilityHint="Botão de confirmação de destino"
          onPress={handleNavigateToMoving}>
          {loading ? (
            <ActivityIndicator size={30} color="#000" />
          ) : (
            <ButtonText>Sim</ButtonText>
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Movement;
