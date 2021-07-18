import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({theme, isActive}) =>
    isActive ? theme.colors.green : theme.colors.secondary_text};
  border-radius: 4px;
`;

export const TimeButtonText = styled.Text``;
