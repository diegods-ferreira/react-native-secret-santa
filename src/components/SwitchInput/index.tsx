import React from 'react';
import { Switch } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Container, Icon, Label } from './styles';

interface SwitchInputProps {
  label: string;
  icon?: string;
  isEnabled: boolean;
  onValueChange(): void;
}

export const SwitchInput: React.FC<SwitchInputProps> = ({
  label,
  icon,
  isEnabled = false,
  onValueChange,
}) => {
  const theme = useTheme();

  return (
    <Container>
      {!!icon && (
        <Icon name={icon} size={RFValue(20)} color={theme.colors.primary} />
      )}

      <Label>{label}</Label>

      <Switch
        trackColor={{
          false: theme.colors.placeholder,
          true: theme.colors.secondary,
        }}
        thumbColor={isEnabled ? theme.colors.primary : theme.colors.placeholder}
        ios_backgroundColor={theme.colors.placeholder}
        onValueChange={onValueChange}
        value={isEnabled}
      />
    </Container>
  );
};
