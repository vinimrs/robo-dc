import { blackIdentityText } from '../../../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  width: 100%;
`;

export const Point = styled.TouchableOpacity<{ top: number; left: number }>`
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  position: absolute;
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const PointText = styled.Text`
  color: ${blackIdentityText};
  font-family: 'Inter-Bold';
  font-size: 14px;
  font-weight: bold;
`;
