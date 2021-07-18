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

export const TimeButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.green};
  border-radius: 4px;
`;

export const TimeButtonText = styled.Text``;
