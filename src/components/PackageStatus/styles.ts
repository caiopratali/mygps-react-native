import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary_text};
`;

export const Package = styled.View``;

export const PackageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 18px;
  color: ${({theme}) => theme.colors.text};
`;

export const Time = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
`;

export const Status = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;
