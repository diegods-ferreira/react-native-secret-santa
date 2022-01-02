import React, { useState, useCallback } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Container, InnerContainer, RNTextInput, Icon, Label } from './styles';

interface TextInputProps extends RNTextInputProps {
  icon?: string;
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  ...rest
}) => {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValue);
  }, [inputValue]);

  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      <InnerContainer isFocused={isFocused}>
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

        <RNTextInput
          {...rest}
          keyboardAppearance="dark"
          placeholderTextColor={theme.colors.placeholder}
          value={inputValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            setInputValue(value);
            setIsFilled(!!value);
          }}
        />
      </InnerContainer>
    </Container>
  );
};
