import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {CurrentStatus} from '../../components/CurrentStatus';
import {Interval} from '../../components/Interval';
import {ServiceStatus} from '../../components/ServiceStatus';

import {addPoint} from '../../redux/reducer';

import {Container} from './styles';

export const Home: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(10);
  const [milliseconds, setMilliseconds] = useState(10000);
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [watchID, setWatchID] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const pack = () => ({
      id: JSON.stringify(new Date().getTime()),
      points: {
        id: JSON.stringify(new Date().getTime()),
        latitude: currentLatitude,
        longitude: currentLongitude,
        speed: currentSpeed,
        time: format(new Date(), 'dd/MM/yyyy'),
        hour: format(new Date(), 'HH:mm'),
        status: false,
      },
    });
    if (isEnabled) {
      const interval = setInterval(() => {
        dispatch(addPoint(pack()));
      }, milliseconds);
      return () => clearInterval(interval);
    }
  }, [
    isEnabled,
    dispatch,
    currentLatitude,
    currentLongitude,
    currentSpeed,
    milliseconds,
  ]);

  useEffect(() => {
    setMilliseconds(selectedTime * 1000);
  }, [selectedTime]);

  return (
    <Container>
      <CurrentStatus title="My GPS - Tracking" />
      <ServiceStatus
        isEnabled={isEnabled}
        setIsEnabled={setIsEnabled}
        setCurrentLatitude={setCurrentLatitude}
        setCurrentLongitude={setCurrentLongitude}
        setCurrentSpeed={setCurrentSpeed}
        setWatchID={setWatchID}
        watchID={watchID}
      />
      <Interval
        title="Intervalo de comunicação"
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </Container>
  );
};
