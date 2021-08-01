import React from 'react';

import {PackageStatus} from '../../components/PackageStatus';

import {Container} from './styles';

import {Button} from 'react-native';

export const Status: React.FC = () => {
  return (
    <Container>
      <PackageStatus />
      <PackageStatus />
      <PackageStatus />
      <Button title="click" onPress={() => {}} />
    </Container>
  );
};
