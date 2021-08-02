import React from 'react';
import {Container, Package, PackageHeader, Title, Time, Status} from './styles';

interface PackageStatusProps {
  id: string;
  time: string;
  status: boolean;
}

export const PackageStatus: React.FC<PackageStatusProps> = ({
  id,
  time,
  status,
}) => (
  <Container>
    <Package>
      <PackageHeader>
        <Title>Pacote ID: {id}</Title>
        <Time>{time}</Time>
      </PackageHeader>
      <Status>{status ? 'Sincronizado' : 'Pendente Sincronizar'}</Status>
    </Package>
  </Container>
);
