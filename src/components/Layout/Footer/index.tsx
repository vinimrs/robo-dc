import React from 'react';

import { Container, FooterButton, FooterButtonText } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterButton>
        <FooterButtonText>Ajuda</FooterButtonText>
      </FooterButton>
    </Container>
  );
};

export default Footer;
