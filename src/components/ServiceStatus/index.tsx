import React from 'react';

import {Container, ServiceInfo, Title, Status, SwitchButton} from './styles';
import {callLocation, clearLocation} from '../../utils/geoLocation';

interface ServiceStatusProps {
  isEnabled: boolean;
  setIsEnabled: (c: boolean) => void;
  setCurrentLatitude: (c: string) => void;
  setCurrentLongitude: (c: string) => void;
  setCurrentSpeed: (c: number) => void;
  setWatchID: (c: number) => void;
  watchID: number;
}

export const ServiceStatus: React.FC<ServiceStatusProps> = ({
  isEnabled,
  setIsEnabled,
  setCurrentLatitude,
  setCurrentLongitude,
  setCurrentSpeed,
  setWatchID,
  watchID,
}) => {
  const handleServiceActivation = (value: boolean) => {
    value
      ? callLocation({
          setCurrentLatitude,
          setCurrentLongitude,
          setCurrentSpeed,
          setWatchID,
        })
      : clearLocation(watchID);
    setIsEnabled(value);
  };

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
