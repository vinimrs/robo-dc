import React from 'react';

import { Container, Title } from './styles';

const EmptyList: React.FC<{
  accessibilityHint: string;
  image: string;
  title: string;
}> = ({ title, accessibilityHint }) => {
  return (
    <Container accessibilityHint={accessibilityHint}>
      <Title accessibilityHint="Feedback">{title}</Title>
    </Container>
  );
};

export default EmptyList;
