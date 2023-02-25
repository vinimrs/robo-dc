import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Header: React.FC<{ userRole: string }> = ({ userRole }) => {
  return (
    <View>
      <Text accessibilityHint="Saudações ao usuário">
        Olá, <Text accessibilityHint="Usuário">{userRole}</Text>!
      </Text>
      <Text>O que temos para hoje?</Text>
    </View>
  );
};

export default Header;
