import { imagesSrc, pointsMapped } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import { StackParamsList } from 'src/rotes/AppRotes';
import { Container, Point, PointText } from './styles';

const ListPoints: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  return (
    <Container>
      {pointsMapped.map((item, index) => (
        <Point
          onPress={() => {
            navigation.navigate('Point', { point: item.point });
          }}
          top={item.position.top}
          left={item.position.left}
          accessibilityHint="Ponto do DC"
          testID={item.point.name}
          key={index}>
          <Image source={imagesSrc.location} />
          <PointText>{item.point.name}</PointText>
        </Point>
      ))}
    </Container>
  );
};

export default ListPoints;
