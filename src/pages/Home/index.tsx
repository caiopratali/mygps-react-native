import React from 'react';

import {CurrentStatus} from '../../components/CurrentStatus';
import {Interval} from '../../components/Interval';
import {ServiceStatus} from '../../components/ServiceStatus';

import {Container} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <CurrentStatus title="My GPS - Tracking" />
      <ServiceStatus />
      <Interval title="Intervalo de comunicação" />
    </Container>
  );
};
