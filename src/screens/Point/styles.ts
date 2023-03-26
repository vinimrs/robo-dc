import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 876px;
  flex-direction: row;
  margin-top: 24px;
`;

export const PointImage = styled.Image`
  width: 388px;
  height: 200px;
  border-radius: 12px;
`;

export const InfoContainer = styled.View`
  width: 456px;
  align-items: flex-start;
  margin-left: 32px;
`;

export const PointTitle = styled.Text`
  font-size: 36px;
  font-weight: bold;
  padding-right: 8px;
  margin-top: -8px;
  font-family: 'Inter-Bold';
`;

export const PointDescription = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Medium';
  margin-top: 12px;
  min-width: 100%;
  line-height: 30px;
  text-align: justify;
  color: '#000000';
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
  padding: 0 0px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 23px;
  background-color: #6be8e6;
  border-radius: 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-right: 16px;
`;

export const ButtonIcon = styled.Image`
  width: 31px;
  height: 21px;
  transform: rotate(180deg);
`;
