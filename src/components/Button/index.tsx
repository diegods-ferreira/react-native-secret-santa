import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { RectButton, TouchableOpacity, ButtonText } from './styles';

interface ButtonProps {
  title: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  showLoadingIndicator?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type = 'primary',
  showLoadingIndicator,
}) => {
  const theme = useTheme();

  if (type === 'primary') {
    return (
      <RectButton>
        {showLoadingIndicator ? (
          <ActivityIndicator size="large" color={theme.colors.text} />
        ) : (
          <ButtonText type={type}>{title}</ButtonText>
        )}
      </RectButton>
    );
  }

  return (
    <TouchableOpacity type={type}>
      {showLoadingIndicator ? (
        <ActivityIndicator size="large" color={theme.colors.attention} />
      ) : (
        <ButtonText type={type}>{title}</ButtonText>
      )}
    </TouchableOpacity>
  );
};
