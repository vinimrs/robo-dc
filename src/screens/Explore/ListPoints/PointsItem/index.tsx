import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  Body,
  Container,
  ContainerFilter,
  Header,
  Image,
  Title,
} from './styles';

const PointsItem: React.FC<{
  accessibilityHint: string;
  name: string;
  slug: string;
  image: ImageSourcePropType;
  onPress: () => void;
}> = ({ accessibilityHint, name, onPress, slug, image }) => {
  const handleTitle = (titleRaw: string, limit: number) => {
    const newTitle = titleRaw[0].toUpperCase() + titleRaw.substring(1);
    if (newTitle.length > limit) {
      return `${newTitle.substring(0, limit)}...`;
    }
    return newTitle;
  };

  return (
    <Container
      onPress={onPress}
      accessibilityHint={accessibilityHint}
      testID={slug}>
      <Header>
        <ContainerFilter />
        <Image source={image} />
      </Header>
      <Body>
        <Title testID="titulo">{handleTitle(name, 100)}</Title>
      </Body>
    </Container>
  );
};

export default PointsItem;
