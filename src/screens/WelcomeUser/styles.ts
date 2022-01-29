import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(24)}px;
`;

export const InnerContainer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(32)}px;
  padding: ${RFValue(32)}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-bottom: ${RFValue(16)}px;
`;

export const BackButtonIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme }) => ({
    name: 'arrow-left',
    size: RFValue(24),
    color: theme.colors.text,
  }),
)``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: ${RFValue(8)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-bottom: ${RFValue(32)}px;
`;

export const FormContainer = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;
