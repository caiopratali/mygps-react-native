import styled from 'styled-components/native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface StatusProps {
  status: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.colors.secondary_text};
`;

export const Icon = styled(FeatherIcons)`
  font-size: 50px;
  margin: 0 28px;
  color: ${({theme}) => theme.colors.blue};
`;

export const StatusInfo = styled.View``;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 20px;
  color: ${({theme}) => theme.colors.text};
`;

export const Status = styled.Text<StatusProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  color: ${({theme, status}) =>
    status ? theme.colors.green : theme.colors.red};
`;
