import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StackParamsList } from 'src/rotes/AppRotes';
import { robotServices } from '../../../services/robotServices';
import { Button, ButtonText, Title } from '../styles';
import { ButtonContainer, MovingContainer } from './styles';

type MovingScreenProps = NativeStackScreenProps<StackParamsList, 'Moving'>;

const Moving: React.FC<MovingScreenProps> = ({ route }) => {
  const params = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const handleCancelMovement = async () => {
    const res = await robotServices.cancelMove();
    if (res.ok) {
      navigation.push('Point', { point: params.point });
    }
  };

  useEffect(() => {
    const verifyStatus = async () => {
      const res = await robotServices.getStatus();
      console.log(res);
      if (res.body.goal_state === 'SUCCEEDED') {
        navigation.navigate('Arrived', { point: params.point });
      }
    };
    verifyStatus();
    const interval = setInterval(verifyStatus, 5000);

    return () => clearInterval(interval);
  }, [navigation, params.point]);

  return (
    <MovingContainer>
      <Title accessibilityHint="Feedback de movimentação">{`Indo para o ${params.point.name}.`}</Title>
      <ButtonContainer>
        <Button
          accessibilityHint="Botão de cancelamento de passeio"
          onPress={handleCancelMovement}>
          <ButtonText>Cancelar o passeio</ButtonText>
        </Button>
      </ButtonContainer>
    </MovingContainer>
  );
};

export default Moving;
