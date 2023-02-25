import { blackIdentityText } from '../../../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 388px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;

  background-color: #fafafa;
  border-radius: 12px;
  elevation: 4;
  shadow-color: #000;
  overflow: hidden;
`;

export const ContainerFilter = styled.View`
  /* background-color: green; */
  background-color: rgba(3, 3, 3, 0.35);
  border-radius: 12px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Inter-Bold';
  font-weight: 700;
  color: ${blackIdentityText};
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #a5a5a5;
  width: 80%;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 100;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Body = styled.View`
  width: 100%;
  min-height: 170px;
  padding: 16px;
  padding-top: 24px;
  margin-top: -16px;
  background-color: #fafafa;
  border-radius: 12px;
  justify-content: flex-start;
`;
