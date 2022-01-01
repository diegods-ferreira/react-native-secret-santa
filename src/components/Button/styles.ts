import styled, { css } from 'styled-components/native';
import { RectButton as RectButtonRNGH } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

interface IconProps {
  iconRight: boolean;
}

export const RectButton = styled(RectButtonRNGH)<IconProps>`
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(32)}px;
  background: ${({ theme }) => theme.colors.attention};

  flex-direction: ${({ iconRight }) => (iconRight ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity<TypeProps & IconProps>`
  height: ${RFValue(64)}px;
  border-radius: ${RFValue(32)}px;

  flex-direction: ${({ iconRight }) => (iconRight ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.type === 'secondary' &&
    css`
      border-width: ${RFValue(2)}px;
      border-color: ${({ theme }) => theme.colors.attention};
    `}
`;

export const ButtonText = styled.Text<TypeProps & IconProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;

  ${(props) =>
    props.type === 'primary' &&
    css`
      color: #ffffff;
    `}

  ${(props) =>
    (props.type === 'secondary' || props.type === 'tertiary') &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${({ iconRight }) =>
    iconRight
      ? css`
          margin-right: ${RFValue(16)}px;
        `
      : css`
          margin-left: ${RFValue(16)}px;
        `}
`;
