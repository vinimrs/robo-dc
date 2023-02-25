import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  Body,
  Container,
  ContainerFilter,
  Header,
  Image,
  Subtitle,
  Title,
} from './styles';

const EventsItem: React.FC<{
  accessibilityHint: string;
  title: string;
  type: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
}> = ({ accessibilityHint, description, title, onPress, type, image }) => {
  const handleDescription = (descriptionRaw: string, limit: number) => {
    const newDescription = descriptionRaw.replace(/(\r\n|\n|\r)/gm, '');
    if (newDescription.length > limit) {
      return `${newDescription.substring(0, limit)}...`;
    }
    return newDescription;
  };

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
      testID={type}>
      <Header>
        <ContainerFilter />
        <Image source={image} />
      </Header>
      <Body>
        <Title testID="titulo">{handleTitle(title, 100)}</Title>
        <Subtitle>{handleDescription(description, 55)}</Subtitle>
      </Body>
    </Container>
  );
};

export default EventsItem;
