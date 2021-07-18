import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 20px 16px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.secondary_text};
`;
