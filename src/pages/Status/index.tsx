import React from 'react';
import {PackageStatus} from '../../components/PackageStatus';

import {Container} from './styles';

export const Status: React.FC = () => (
  <Container>
    <PackageStatus />
    <PackageStatus />
    <PackageStatus />
  </Container>
);
