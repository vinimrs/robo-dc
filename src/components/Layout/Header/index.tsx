import { HeaderContainer, TitleHeadline } from '@global';
import React from 'react';
import Logo from '../Logo';
import ReturnButton from './ReturnButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from 'src/rotes/AppRotes';

const Header: React.FC<{ title?: string; larger?: boolean }> = ({
  title,
  larger,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  return (
    <HeaderContainer larger={larger}>
      <ReturnButton onPress={() => navigation.goBack()} />
      {title ? <TitleHeadline>{title}</TitleHeadline> : null}
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
