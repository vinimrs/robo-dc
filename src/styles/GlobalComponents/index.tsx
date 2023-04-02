import styled from 'styled-components/native';
import { blackIdentityText } from '../colors';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { Dimensions } from 'react-native';

export const Container = styled.View<{ larger?: boolean }>`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  min-width: ${({ larger }) =>
    larger ? `${Dimensions.get('window').height}px` : '876px'};
  height: ${({ larger }) =>
    larger ? `${Dimensions.get('window').height}px` : '100%'};
  margin: 0 auto;
  background-color: ${({ larger }) =>
    larger ? 'rgba(8, 217, 214, 0.2)' : '#00000000'};
`;

export const HeaderContainer = styled.View<{ larger?: boolean }>`
  width: ${({ larger }) =>
    larger ? `${Dimensions.get('window').width}px` : '876px'};
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
  position: absolute;
  z-index: 100;
`;

export const TitleHeadline = styled.Text`
  color: ${blackIdentityText};
  font-family: 'Inter-Bold';
  font-size: 40px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: center;
`;

export const TitleSubheadline = styled.Text`
  color: #272727;
  font-family: 'Inter-SemiBold';
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.25px;
  text-align: center;
`;

export { Footer, Header };
