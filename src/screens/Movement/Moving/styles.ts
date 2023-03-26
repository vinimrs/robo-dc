import { greenIdentity } from '../../../styles/colors';
import styled from 'styled-components/native';

export const MovingContainer = styled.View`
  background-color: ${greenIdentity};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 32px;
  align-items: center;
  padding-bottom: 32px;
`;
