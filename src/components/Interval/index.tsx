import React from 'react';
import {useServiceStatusContext} from '../../contexts/ServiceStatusContext';

import {StatusIntervalButton} from '../StatusIntervalButton';
import {Container, Title, TimeButtonList} from './styles';

interface IntervalProps {
  title: string;
}

export const Interval: React.FC<IntervalProps> = ({title}) => {
  const {selectedTime, setSelectedTime} = useServiceStatusContext();

  const time = [10, 5, 3, 1];

  return (
    <Container>
      <Title>{title}</Title>
      <TimeButtonList>
        {time.map(setTime => (
          <StatusIntervalButton
            key={setTime}
            time={setTime}
            isActive={selectedTime === setTime}
            onPress={() => setSelectedTime(setTime)}
          />
        ))}
      </TimeButtonList>
    </Container>
  );
};
