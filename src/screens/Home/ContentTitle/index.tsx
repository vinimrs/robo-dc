import {
  TitleHeadline,
  TitleSubheadline,
} from '../../../styles/GlobalComponents';
import React from 'react';
import { Headline } from './styles';

import { Container } from './styles';

const ContentTitle: React.FC = () => {
  return (
    <Container>
      <Headline>
        <TitleHeadline>Seja bem-vindo(a) ao DC!</TitleHeadline>
      </Headline>
      <TitleSubheadline>Vamos começar!</TitleSubheadline>
      <TitleSubheadline>Nos diga, qual o seu papel?</TitleSubheadline>
    </Container>
  );
};

export default ContentTitle;
