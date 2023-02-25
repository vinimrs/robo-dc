import styled from 'styled-components/native';
import { blackIdentityText } from '../../../styles/colors';

export const Container = styled.TouchableOpacity<{ largeSpacing?: boolean }>`
  width: 250px;
  height: 145px;
  background: rgba(8, 217, 214, 0.6);
  border-radius: 12px;
  margin-left: ${({ largeSpacing }) => (largeSpacing ? '60px' : '36px')};
  margin-top: 36px;
`;

export const Header = styled.View`
  align-items: flex-start;
  width: 100%;
  padding-top: 18px;
  padding-left: 18px;
`;

export const Body = styled.View`
  align-items: flex-end;
  width: 100%;
  padding-right: 18px;
`;

export const Title = styled.Text`
  color: ${blackIdentityText};
  font-weight: bold;
  font-size: 36px;
`;

export const Image = styled.Image`
  width: 67px;
  height: 67px;
`;
