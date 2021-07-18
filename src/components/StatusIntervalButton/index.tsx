import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, TimeButtonText} from './styles';

interface Props extends TouchableOpacityProps {
  time: number;
  isActive: boolean;
}

export const StatusIntervalButton: React.FC<Props> = ({
  time,
  isActive,
  ...rest
}) => (
  <Container {...rest} isActive={isActive}>
    <TimeButtonText>{`${time}s`}</TimeButtonText>
  </Container>
);
