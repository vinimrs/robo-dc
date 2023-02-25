import React from 'react';

import { Body, Container, Header, Image, Title } from './styles';

const ListItem: React.FC<{
  src: any;
  title: string;
  accessibilityHint: string;
  onPress?: () => void;
  largeSpacing?: boolean;
}> = ({ src, title, accessibilityHint, onPress, largeSpacing }) => {
  return (
    <Container
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      largeSpacing={largeSpacing}>
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
