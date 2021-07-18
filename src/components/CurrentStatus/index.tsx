import React from 'react';

import {Container, Icon, StatusInfo, Title, Status} from './styles';

export const CurrentStatus: React.FC = () => (
  <Container>
    <Icon name="compass" />
    <StatusInfo>
      <Title>My GPS - Tracking</Title>
      <Status>Online</Status>
    </StatusInfo>
  </Container>
);
