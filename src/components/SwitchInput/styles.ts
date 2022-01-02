import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  min-height: ${RFValue(64)}px;
  margin-bottom: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: ${RFValue(16)}px;
`;

export const Label = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
`;
