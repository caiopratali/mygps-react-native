import React from 'react';
import {Container, Package, PackageHeader, Title, Time, Status} from './styles';

export const PackageStatus: React.FC = () => (
  <Container>
    <Package>
      <PackageHeader>
        <Title>Pacote ID: XXXXX</Title>
        <Time>11:32</Time>
      </PackageHeader>
      <Status>Pendente Sincronizar</Status>
    </Package>
  </Container>
);
