import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather as FeatherIcon } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton, TouchableOpacity, ButtonText } from './styles';

interface ButtonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  icon?: any;
  iconRight?: boolean;
  showLoadingIndicator?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type = 'primary',
  icon,
  iconRight = false,
  showLoadingIndicator,
}) => {
  const theme = useTheme();

  if (type === 'primary') {
    return (
      <RectButton iconRight={iconRight}>
        {showLoadingIndicator ? (
          <ActivityIndicator size="large" color={theme.colors.text} />
        ) : (
          <>
            {!!icon && (
              <FeatherIcon name={icon} size={RFValue(20)} color="#ffffff" />
            )}

            <ButtonText type={type} iconRight={iconRight}>
              {title}
            </ButtonText>
          </>
        )}
      </RectButton>
    );
  }

  return (
    <TouchableOpacity type={type} iconRight={iconRight}>
      {showLoadingIndicator ? (
        <ActivityIndicator size="large" color={theme.colors.attention} />
      ) : (
        <>
          {!!icon && (
            <FeatherIcon name={icon} size={RFValue(20)} color="#ffffff" />
          )}

          <ButtonText type={type} iconRight={iconRight}>
            {title}
          </ButtonText>
        </>
      )}
    </TouchableOpacity>
  );
};
