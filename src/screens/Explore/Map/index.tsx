import { imagesSrc } from '@constants';
import React from 'react';
import ListPoints from './ListPoints';

import { Container, MapImage } from './styles';

const Map: React.FC = () => {
  return (
    <Container>
      <ListPoints />
      <MapImage source={imagesSrc.mapa} />
    </Container>
  );
};

export default Map;
