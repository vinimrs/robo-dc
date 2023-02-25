import { imagesSrc } from '../../../../common/constants';
import React from 'react';
import { Image } from 'react-native';
import { Button } from './styles';

const ReturnButton: React.FC<{
  onPress: () => void;
}> = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <Image source={imagesSrc.arrow} />
    </Button>
  );
};

export default ReturnButton;
