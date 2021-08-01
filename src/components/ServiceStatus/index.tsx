import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Platform, Alert, PermissionsAndroid} from 'react-native';

import {Container, ServiceInfo, Title, Status, SwitchButton} from './styles';

interface ServiceStatusProps {
  isEnabled: boolean;
  setIsEnabled: (c: boolean) => void;
}

export const ServiceStatus: React.FC<ServiceStatusProps> = ({
  isEnabled,
  setIsEnabled,
}) => {
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

  return (
    <Container>
      <ServiceInfo>
        <Title>Status do serviço</Title>
        {!isEnabled || (
          <Title>{`Lat: ${currentLatitude}, Lon: ${currentLongitude}`}</Title>
        )}
        <Status>{isEnabled ? 'Serviço ativo' : 'Serviço inativo'}</Status>
      </ServiceInfo>
      <SwitchButton
        onValueChange={() => handleServiceActivation(!isEnabled)}
        value={isEnabled}
      />
    </Container>
  );
};
