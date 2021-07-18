import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px 0 28px;
`;

export const ServiceInfo = styled.View``;

export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Status = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
`;

export const SwitchButton = styled.Switch.attrs({
  trackColor: {
    false: theme.colors.secondary_text,
    true: theme.colors.secondary_text,
  },
  thumbColor: theme.colors.red,
})``;
