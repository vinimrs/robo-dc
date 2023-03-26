import { greenIdentity } from '../../../styles/colors';
import styled from 'styled-components/native';

export const ArrivedContainer = styled.View`
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

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 80px;
  border-radius: 12px;
  background-color: #fff;
  border: 5px solid #fff;
  box-sizing: border-box;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 20px;
  color: #fff;
`;
