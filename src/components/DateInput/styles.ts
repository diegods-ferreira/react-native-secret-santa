import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ValueDisplayContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface ValueTextProps {
  isPlaceholder?: boolean;
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

export const ValueDisplayContainer = styled.View<ValueDisplayContainerProps>`
  width: 100%;
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(32)}px;
  border-width: ${RFValue(2)}px;
  border-color: ${({ theme }) => theme.colors.placeholder};
  overflow: hidden;

  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.background : theme.colors.shape};

  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `}

  ${({ theme, isErrored }) =>
    isErrored &&
    css`
      border-color: ${theme.colors.attention};
    `}
`;

export const PickerPressable = styled(RectButton)`
  width: 100%;
  height: 100%;
  padding: 0px ${RFValue(24)}px;
  border-radius: ${RFValue(32)}px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: ${RFValue(16)}px;
`;

export const ValueText = styled.Text<ValueTextProps>`
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: ${RFValue(16)}px 0px;

  color: ${({ theme, isPlaceholder }) =>
    isPlaceholder ? theme.colors.placeholder : theme.colors.text};
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  margin-top: ${RFValue(4)}px;
`;
