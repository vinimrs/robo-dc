import styled from 'styled-components/native';

export const FilterList = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin-bottom: 24px;
`;

export const FilterContainer = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 10px 50px;
  border: 4px solid #ffffff;
  background-color: ${({ selected }) => (selected ? '#fff' : '#00000000')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const FilterText = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Bold';
  color: #3a3a3a;
`;

export const FilterTitle = styled(FilterText)`
  margin-bottom: 8px;
  text-align: center;
`;

export const FilterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 16px 50px;
  width: 240px;

  background: #fff;
  border-radius: 12px;
`;
