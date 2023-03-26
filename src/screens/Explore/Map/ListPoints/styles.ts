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
`;
