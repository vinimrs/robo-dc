import React from 'react';
import { TextContainer } from '../styles';
import {
  LegendColor,
  LegendContainer,
  LegendList,
  LegendText,
  LegendTitle,
} from './styles';

const Content: React.FC = () => {
  const legend = [
    {
      color: '#E0E080',
      text: 'Laboratório',
    },
    {
      color: '#E1BF80',
      text: 'Serviços',
    },
    {
      color: '#1EC140',
      text: 'Técnico',
    },
    {
      color: '#A0A1C0',
      text: 'Auditório',
    },
  ];

  return (
    <TextContainer>
      <LegendTitle>LEGENDA</LegendTitle>
      <LegendList>
        {legend.map((item, index) => (
          <LegendContainer key={index}>
            <LegendColor color={item.color} />
            <LegendText>{item.text}</LegendText>
          </LegendContainer>
        ))}
      </LegendList>
    </TextContainer>
  );
};

export default Content;
