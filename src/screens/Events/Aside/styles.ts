import { blackIdentityText } from '../../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 358px;
  height: 100%;
  margin-top: 140px;
  padding: 36px 24px;
  justify-content: flex-start;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${blackIdentityText};
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const TextContainer = styled.View`
  padding-top: 16px;
  padding-bottom: 12px;
  border-radius: 8px;
  width: 100%;
  align-items: center;
`;
