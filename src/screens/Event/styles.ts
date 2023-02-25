import styled from 'styled-components/native';

export const Container = styled.View`
  width: 876px;
  height: 100%;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 24px;
`;

export const EventImage = styled.Image`
  width: 388px;
  height: 200px;
  border-radius: 12px;
`;

export const InfoContainer = styled.View`
  width: 380px;
  align-items: flex-start;
`;

export const EventTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding-right: 8px;
  font-family: 'Inter-Bold';
`;

export const EventDescription = styled.Text`
  font-size: 16px;
  font-family: 'Inter-Regular';
  margin-top: 12px;
  max-width: 400px;
  text-align: justify;
`;

export const EventDescriptionPrefix = styled.Text`
  font-size: 16px;
  font-family: 'Inter-Bold';
  font-weight: bold;
  margin-top: 12px;
  /* max-width: 100%; */
`;

export const EventProperty = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const EventPropertyImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const EventPropertyText = styled.Text`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  margin-left: 12px;
`;
