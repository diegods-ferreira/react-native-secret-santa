import React, { useState, useCallback } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Control, Controller } from 'react-hook-form';

import {
  Container,
  InnerContainer,
  RNTextInput,
  Icon,
  Label,
  Error,
} from './styles';

interface TextInputProps extends RNTextInputProps {
  icon?: string;
  label?: string;
  name: string;
  control: Control;
  error?: {
    message: string;
  };
  defaultValue?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  name,
  control,
  error,
  defaultValue,
  ...rest
}) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((value: string) => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, []);

  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      <InnerContainer isFocused={isFocused} isErrored={!!error}>
        {!!icon && (
          <Icon
            name={icon}
            size={RFValue(20)}
            color={
              isFocused || isFilled
                ? theme.colors.primary
                : theme.colors.placeholder
            }
          />
        )}

        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, value } }) => (
            <RNTextInput
              {...rest}
              keyboardAppearance="dark"
              placeholderTextColor={theme.colors.placeholder}
              value={value}
              onChangeText={onChange}
              onFocus={handleInputFocus}
              onBlur={() => handleInputBlur(value)}
            />
          )}
        />
      </InnerContainer>

      {!!error && <Error>{error.message}</Error>}
    </Container>
  );
};
