import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {CurrentStatus} from '../../components/CurrentStatus';
import {Interval} from '../../components/Interval';
import {ServiceStatus} from '../../components/ServiceStatus';
import {IState} from '../../store';

import {Container} from './styles';

export const Home: React.FC = () => {
  const points = useSelector<IState, string[]>(state => state.point.keys);

  return (
    <Container>
      <CurrentStatus title="My GPS - Tracking" />
      <ServiceStatus />
      <Interval title="Intervalo de comunicação" />
      {points.map(item => (
        <Text key={new Date().getTime()}>{JSON.stringify(item)}</Text>
      ))}
    </Container>
  );
};
