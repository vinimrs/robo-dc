import styled from 'styled-components/native';

export const LegendList = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const LegendContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const LegendText = styled.Text`
  font-size: 24px;
  font-family: 'Inter-SemiBold';
  color: #3a3a3a;
`;

export const LegendTitle = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Bold';
  color: #3a3a3a;
`;

export const LegendColor = styled.View<{ color: string }>`
  width: 40px;
  height: 40px;
  /* border-radius: 12px; */
  background-color: ${props => props.color};
  margin-right: 12px;
`;
