import { blackIdentityText } from '../../styles/colors';
import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 876px;
  /* height: 80%; */
  justify-content: space-around;
  flex-direction: row;
  margin-top: 24px;
`;

export const PointImage = styled.Image`
  width: 388px;
  height: 200px;
  border-radius: 12px;
`;

export const InfoContainer = styled.View`
  width: 380px;
  align-items: flex-start;
`;

export const PointTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding-right: 8px;
  font-family: 'Inter-Bold';
`;

export const PointDescription = styled.Text`
  font-size: 16px;
  font-family: 'Inter-Regular';
  margin-top: 12px;
  max-width: 400px;
  text-align: justify;
`;

export const PointDescriptionPrefix = styled.Text`
  font-size: 16px;
  font-family: 'Inter-Bold';
  font-weight: bold;
  margin-top: 12px;
  /* max-width: 100%; */
`;

export const PointProperty = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const PointPropertyImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const PointPropertyText = styled.Text`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  margin-left: 12px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  margin: 24px 0;
  padding: 0 52px;
`;

export const Button = styled.TouchableOpacity`
  padding: 5px 22px;
  background-color: #f5f5f5;
  border: 5px solid #6be8e6;
  border-radius: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 20px;
  line-height: 30px;
  color: ${blackIdentityText};
`;
