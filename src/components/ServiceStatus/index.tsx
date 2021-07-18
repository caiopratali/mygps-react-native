import React from 'react';

import {Container, ServiceInfo, Title, Status, SwitchButton} from './styles';

export const ServiceStatus: React.FC = () => (
  <Container>
    <ServiceInfo>
      <Title>Status do serviço</Title>
      <Status>Serviço Ativo</Status>
    </ServiceInfo>
    <SwitchButton />
  </Container>
);
