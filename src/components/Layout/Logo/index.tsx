import { imagesSrc } from '../../../common/constants';
import React from 'react';
import { LogoImage } from './styles';

const Logo: React.FC = () => {
  return <LogoImage source={imagesSrc.logo} />;
};

export default Logo;
