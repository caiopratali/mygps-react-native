import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 28px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 18px;
  margin-bottom: 15px;
`;

export const TimeButtonList = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
