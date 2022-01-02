import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(4)}px;
`;

export const InnerContainer = styled.View<ContainerProps>`
  width: 100%;
  min-height: ${RFValue(64)}px;
  padding: 0 ${RFValue(24)}px;
  border-radius: ${RFValue(32)}px;
  border-width: ${RFValue(2)}px;

  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.background : theme.colors.shape};

  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.placeholder};

  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const RNTextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: ${RFValue(16)}px;
`;
