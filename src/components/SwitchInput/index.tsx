import React from 'react';
import { Switch } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Control, Controller } from 'react-hook-form';

import { Container, Icon, Label } from './styles';

interface SwitchInputProps {
  label: string;
  icon?: string;
  name: string;
  control: Control;
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
}

export const SwitchInput: React.FC<SwitchInputProps> = ({
  label,
  icon,
  name,
  control,
  defaultValue = false,
  onValueChange,
}) => {
  const theme = useTheme();

  const handleValueChange = (
    value: boolean,
    onChange: (...event: any[]) => void,
  ) => {
    onChange(value);

    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <Container>
      {!!icon && (
        <Icon name={icon} size={RFValue(20)} color={theme.colors.primary} />
      )}

      <Label>{label}</Label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Switch
            trackColor={{
              false: theme.colors.placeholder,
              true: theme.colors.secondary,
            }}
            thumbColor={value ? theme.colors.primary : theme.colors.placeholder}
            ios_backgroundColor={theme.colors.placeholder}
            value={value}
            onValueChange={(valueChange: boolean) =>
              handleValueChange(valueChange, onChange)
            }
          />
        )}
      />
    </Container>
  );
};
