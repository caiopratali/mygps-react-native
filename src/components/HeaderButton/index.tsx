import React from 'react';

import {Container, Title} from './styles';

interface Props {
  text: string;
  onPress: () => void;
}

export const HeaderButton: React.FC<Props> = ({text, onPress}) => (
  <Container onPress={onPress}>
    <Title>{text}</Title>
  </Container>
);
