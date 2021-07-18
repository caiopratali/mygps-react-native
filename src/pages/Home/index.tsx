import React from 'react';
import {CurrentStatus} from '../../components/CurrentStatus';
import {Interval} from '../../components/Interval';
import {ServiceStatus} from '../../components/ServiceStatus';

import {Container} from './styles';

export const Home: React.FC = () => (
  <Container>
    <CurrentStatus />
    <ServiceStatus />
    <Interval />
  </Container>
);
