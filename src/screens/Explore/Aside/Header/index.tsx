import { imagesSrc } from '@constants';
import { TitleSubheadline } from '@global';
import React from 'react';
import { Image } from 'react-native';
import { TextContainer } from '../styles';
import { Subtitle } from './styles';

const Header: React.FC = () => {
  return (
    <TextContainer>
      <TitleSubheadline accessibilityHint="Escolha um destino">
        Escolha um destino!
      </TitleSubheadline>
      <Subtitle>
        Clique no símbolo <Image source={imagesSrc.location} /> para obter mais
        informações!
      </Subtitle>
    </TextContainer>
  );
};

export default Header;
