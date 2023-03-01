import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.View<{ larger?: boolean }>`
  height: ${({ larger }) =>
    larger ? `${Dimensions.get('window').height}px` : '570px'};
  width: ${({ larger }) => (larger ? 'auto' : '876px')};
  align-items: center;
  flex-direction: ${({ larger }) => (larger ? 'row' : 'column')};
  margin-top: ${({ larger }) => (larger ? '0' : '120px')};
`;
