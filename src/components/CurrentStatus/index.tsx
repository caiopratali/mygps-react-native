import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

import {Container, Icon, StatusInfo, Title, Status} from './styles';

interface CurrentStatusProps {
  title: string;
}

export const CurrentStatus: React.FC<CurrentStatusProps> = ({title}) => {
  const {isInternetReachable} = useNetInfo();

  const connection = (isOn: null | boolean) => {
    if (isOn === null || isOn === false) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Container>
      <Icon name="compass" />
      <StatusInfo>
        <Title>{title}</Title>
        <Status status={connection(isInternetReachable)}>
          {connection(isInternetReachable) ? 'Online' : 'Offline'}
        </Status>
      </StatusInfo>
    </Container>
  );
};
