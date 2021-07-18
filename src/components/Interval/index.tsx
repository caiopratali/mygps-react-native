import React from 'react';
import {
  Container,
  Title,
  TimeButtonList,
  TimeButton,
  TimeButtonText,
} from './styles';

export const Interval: React.FC = () => (
  <Container>
    <Title>Intervalo de comunicação</Title>
    <TimeButtonList>
      <TimeButton>
        <TimeButtonText>10s</TimeButtonText>
      </TimeButton>
      <TimeButton>
        <TimeButtonText>5s</TimeButtonText>
      </TimeButton>
      <TimeButton>
        <TimeButtonText>3s</TimeButtonText>
      </TimeButton>
      <TimeButton>
        <TimeButtonText>1s</TimeButtonText>
      </TimeButton>
    </TimeButtonList>
  </Container>
);
