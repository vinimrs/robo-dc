import {
  TitleHeadline,
  TitleSubheadline,
} from '../../../styles/GlobalComponents';
import React from 'react';
import { View } from 'react-native';
import { Headline } from './styles';

// import { Container } from './styles';

const ContentTitle: React.FC<{ userRole: string }> = ({ userRole }) => {
  const userRolelowerCase = userRole.toLowerCase();

  return (
    <View>
      <Headline>
        <TitleHeadline accessibilityHint="Saudações ao usuário">
          Olá,{' '}
          <TitleHeadline accessibilityHint="Usuário">
            {userRolelowerCase}
          </TitleHeadline>
          !
        </TitleHeadline>
      </Headline>
      <TitleSubheadline>O que temos para hoje?</TitleSubheadline>
    </View>
  );
};

export default ContentTitle;
