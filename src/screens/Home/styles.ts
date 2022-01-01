import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import christmasImg from '../../assets/images/christmas.png';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MainImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const mainImageSize = RFPercentage(40);

export const MainImage = styled.Image.attrs({
  source: christmasImg,
})`
  width: ${mainImageSize}px;
  height: ${mainImageSize}px;
`;

export const TitleContainer = styled.View.attrs(({ theme }) => ({
  style: theme.boxShadow,
}))`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(64)}px ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(28)}px;
  border-top-right-radius: ${RFValue(28)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
  margin-bottom: ${RFValue(32)}px;
`;
