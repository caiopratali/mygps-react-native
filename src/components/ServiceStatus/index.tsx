import React from 'react';
import {useState} from 'react';

import {Container, ServiceInfo, Title, Status, SwitchButton} from './styles';

export const ServiceStatus: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <ServiceInfo>
        <Title>Status do serviço</Title>
        <Status>{isEnabled ? 'Serviço ativo' : 'Serviço inativo'}</Status>
      </ServiceInfo>
      <SwitchButton onValueChange={toggleSwitch} value={isEnabled} />
    </Container>
  );
};
