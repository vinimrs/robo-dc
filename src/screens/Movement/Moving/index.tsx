import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StackParamsList } from 'src/rotes/AppRotes';
import { Title } from '../styles';
import { MovingContainer } from './styles';

type MovingScreenProps = NativeStackScreenProps<StackParamsList, 'Moving'>;

const Moving: React.FC<MovingScreenProps> = ({ route }) => {
  const params = route.params;

  return (
    <MovingContainer>
      <Title accessibilityHint="Feedback de movimentação">{`Indo para o ${params.point.name}.`}</Title>
    </MovingContainer>
  );
};

export default Moving;
