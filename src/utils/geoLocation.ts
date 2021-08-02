import Geolocation from '@react-native-community/geolocation';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

interface GetLocationProps {
  setCurrentLatitude: (c: string) => void;
  setCurrentLongitude: (c: string) => void;
  setCurrentSpeed: (c: number) => void;
  setWatchID: (c: number) => void;
}

const getLocation = ({
  setCurrentLatitude,
  setCurrentLongitude,
  setCurrentSpeed,
  setWatchID,
}: GetLocationProps) => {
  const id = Geolocation.watchPosition(
    position => {
      const latitude = JSON.stringify(position.coords.latitude);
      setCurrentLatitude(latitude);

      const longitude = JSON.stringify(position.coords.longitude);
      setCurrentLongitude(longitude);

      setCurrentSpeed(
        position.coords.speed === null || position.coords.speed < 0
          ? 0
          : position.coords.speed,
      );
    },
    error => Alert.alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
  setWatchID(id);
};

export const clearLocation = (watchID: number) => {
  Geolocation.clearWatch(watchID);
};

export const callLocation = ({
  setCurrentLatitude,
  setCurrentLongitude,
  setCurrentSpeed,
  setWatchID,
}: GetLocationProps) => {
  if (Platform.OS === 'ios') {
    getLocation({
      setCurrentLatitude,
      setCurrentLongitude,
      setCurrentSpeed,
      setWatchID,
    });
  } else {
    const requestLocationPermission = async () => {
      try {
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
          getLocation({
            setCurrentLatitude,
            setCurrentLongitude,
            setCurrentSpeed,
            setWatchID,
          });
        } else {
          Alert.alert('Permissão de localização negada');
        }
      } catch (error) {
        console.warn(error);
      }
    };
    requestLocationPermission();
  }
};
