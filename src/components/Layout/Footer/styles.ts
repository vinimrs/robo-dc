import { blackIdentityText } from '../../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  min-width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 100;
  padding: 8px 0 12px 0;
`;

export const FooterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px 44px;

  background: rgba(8, 217, 214, 0.2);
  border-radius: 12px;
`;

export const FooterButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 20px;
  color: ${blackIdentityText};
`;
