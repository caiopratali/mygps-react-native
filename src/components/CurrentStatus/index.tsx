import React from 'react';

import {Container, Icon, StatusInfo, Title, Status} from './styles';

interface CurrentStatusProps {
  title: string;
  connectionStatus: boolean;
}

export const CurrentStatus: React.FC<CurrentStatusProps> = ({
  title,
  connectionStatus,
}) => (
  <Container>
    <Icon name="compass" />
    <StatusInfo>
      <Title>{title}</Title>
      <Status status={connectionStatus}>
        {connectionStatus ? 'Online' : 'Offline'}
      </Status>
    </StatusInfo>
  </Container>
);
