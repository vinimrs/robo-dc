import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Body, Container, Header, Image, Title } from './styles';

const ListItem: React.FC<{
  src: ImageSourcePropType;
  title: string;
  accessibilityHint?: string;
  onPress?: () => void;
  largeSpacing?: boolean;
  key?: string;
  last?: boolean;
}> = ({ src, title, key, last, accessibilityHint, onPress, largeSpacing }) => {
  return (
    <Container
      key={key}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      largeSpacing={largeSpacing}
      last={last}>
      <Header>
        <Image source={src} />
      </Header>
      <Body>
        <Title testID="titulo">{title}</Title>
      </Body>
    </Container>
  );
};

export default ListItem;
