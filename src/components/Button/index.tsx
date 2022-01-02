import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import boxShadow from '../../global/styles/boxShadow';

import { RectButton, TouchableOpacity, ButtonText } from './styles';

interface ButtonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  icon?: any;
  iconRight?: boolean;
  showLoadingIndicator?: boolean;
  onPress(): void;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type = 'primary',
  icon,
  iconRight = false,
  showLoadingIndicator,
  onPress,
}) => {
  const theme = useTheme();

  if (type === 'primary') {
    return (
      <RectButton iconRight={iconRight} style={boxShadow} onPress={onPress}>
        {showLoadingIndicator ? (
          <ActivityIndicator size="large" color={theme.colors.text} />
        ) : (
          <>
            {!!icon && <Icon name={icon} size={RFValue(20)} color="#ffffff" />}

            <ButtonText type={type} iconRight={iconRight}>
              {title}
            </ButtonText>
          </>
        )}
      </RectButton>
    );
  }

  return (
    <TouchableOpacity type={type} iconRight={iconRight} onPress={onPress}>
      {showLoadingIndicator ? (
        <ActivityIndicator size="large" color={theme.colors.attention} />
      ) : (
        <>
          {!!icon && <Icon name={icon} size={RFValue(20)} color="#ffffff" />}

          <ButtonText type={type} iconRight={iconRight}>
            {title}
          </ButtonText>
        </>
      )}
    </TouchableOpacity>
  );
};
