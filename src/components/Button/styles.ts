import styled, { css } from 'styled-components/native';
import { RectButton as RectButtonRNGH } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'primary' | 'secondary' | 'tertiary';
}

export const RectButton = styled(RectButtonRNGH)`
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(28)}px;
  background: ${({ theme }) => theme.colors.attention};

  justify-content: center;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity<TypeProps>`
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(28)}px;

  justify-content: center;
  align-items: center;

  ${(props) =>
    props.type === 'secondary' &&
    css`
      border-width: ${RFValue(2)}px;
      border-color: ${({ theme }) => theme.colors.attention};
    `}
`;

export const ButtonText = styled.Text<TypeProps>`
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
`;
