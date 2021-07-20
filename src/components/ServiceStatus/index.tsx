import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Platform, Alert, PermissionsAndroid} from 'react-native';

import {useServiceStatusContext} from '../../contexts/ServiceStatusContext';

import {Container, ServiceInfo, Title, Status, SwitchButton} from './styles';
import {useEffect} from 'react';
import secondsToMilliseconds from 'date-fns/secondsToMilliseconds';

export const ServiceStatus: React.FC = () => {
  const {isEnabled, setIsEnabled, selectedTime} = useServiceStatusContext();
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);

  const getLocation = () => {
    const id = Geolocation.watchPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        setCurrentLatitude(latitude);

        const longitude = JSON.stringify(position.coords.longitude);
        setCurrentLongitude(longitude);
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    setWatchID(id);
  };

  const clearLocation = () => {
    Geolocation.clearWatch(watchID);
  };

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de acesso à localização',
            message: 'Este aplicativo precisa acessar sua localicação',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Permissão de localização negada');
        }
      };
      requestLocationPermission();
    }
  };

  const handleServiceActivation = (value: boolean) => {
    value ? callLocation() : clearLocation();
    setIsEnabled(value);
  };

  const milliseconds = secondsToMilliseconds(selectedTime);

  useEffect(() => {
    if (isEnabled) {
      const interval = setInterval(() => {
        console.log({milliseconds, currentLatitude, currentLongitude});
      }, milliseconds);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milliseconds, isEnabled]);

  return (
    <Container>
      <ServiceInfo>
        <Title>Status do serviço</Title>
        <Status>{isEnabled ? 'Serviço ativo' : 'Serviço inativo'}</Status>
      </ServiceInfo>
      <SwitchButton
        onValueChange={() => handleServiceActivation(!isEnabled)}
        value={isEnabled}
      />
    </Container>
  );
};
