import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 64px;
  font-family: 'Inter-Bold';
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  font-size: 48px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 24px;
  width: 40%;
`;

export const Button = styled.TouchableOpacity<{ positive?: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 82px;
  border-radius: 12px;
  background-color: ${props => (props.positive ? '#00BFA6' : '#FF5C5C')};
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 20px;
`;
