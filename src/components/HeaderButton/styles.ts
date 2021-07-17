import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;
  margin-right: 16px;
`;
