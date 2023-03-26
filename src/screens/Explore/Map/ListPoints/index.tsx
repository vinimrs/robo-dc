import { imagesSrc, points } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';
import { StackParamsList } from 'src/rotes/AppRotes';
import { Container, Point } from './styles';

const ListPoints: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const pointsMapped = [
    {
      point: points[0],
      position: { top: 40, left: 30 },
    },
    {
      point: points[1],
      position: { top: 40, left: 130 },
    },
    {
      point: points[2],
      position: { top: 40, left: 230 },
    },
    {
      point: points[3],
      position: { top: 40, left: 330 },
    },
    {
      point: points[4],
      position: { top: 90, left: 430 },
    },
    {
      point: points[5],
      position: { top: 40, left: 510 },
    },
    {
      point: points[6],
      position: { top: 40, left: 610 },
    },
    {
      point: points[7],
      position: { top: 40, left: 730 },
    },
    {
      point: points[8],
      position: { top: 115, left: 800 },
    },
    {
      point: points[9],
      position: { top: 175, left: 40 },
    },
    {
      point: points[10],
      position: { top: 250, left: 30 },
    },
    {
      point: points[11],
      position: { top: 305, left: 40 },
    },
    {
      point: points[15],
      position: { top: 360, left: 530 },
    },
  ];

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
        </Point>
      ))}
    </Container>
  );
};

export default ListPoints;
