import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {CurrentStatus} from '../../components/CurrentStatus';
import {Interval} from '../../components/Interval';
import {ServiceStatus} from '../../components/ServiceStatus';
import {fetchPoints} from '../../redux/reducer';

import {Container} from './styles';

export const Home: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPoints());
  }, [dispatch]);

  const selector = useSelector(state => state.packages);

  console.log(selector);

  return (
    <Container>
      <CurrentStatus title="My GPS - Tracking" />
      <ServiceStatus isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      <Interval
        title="Intervalo de comunicação"
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </Container>
  );
};
