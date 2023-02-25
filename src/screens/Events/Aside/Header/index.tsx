import { TitleSubheadline } from '@global';
import React from 'react';
import { TextContainer } from '../styles';
import { Subtitle } from './styles';

const Header: React.FC = () => {
  return (
    <TextContainer>
      <TitleSubheadline accessibilityHint="Escolha um evento">
        Escolha um evento para você!
      </TitleSubheadline>
      <Subtitle>Aqui está listado os últimos eventos ocorridos no DC.</Subtitle>
    </TextContainer>
  );
};

export default Header;
