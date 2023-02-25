import styled from 'styled-components/native';

export const Content = styled.View<{ larger?: boolean }>`
  height: ${({ larger }) => (larger ? '800px' : '570px')};
  align-items: center;
  flex-direction: ${({ larger }) => (larger ? 'row' : 'column')};
  margin-top: ${({ larger }) => (larger ? '0' : '120px')};
`;
