import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Platform } from 'react-native';
import {
  Label,
  PickerPressable,
  ValueDisplayContainer,
  Icon,
  ValueText,
  Container,
} from './styles';

interface DateInputProps {
  label?: string;
  placeholder?: string;
  value: Date | undefined;
  onValueChange(date: Date): void;
  maximumDate?: Date;
  minimumDate?: Date;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  value,
  onValueChange,
  maximumDate,
  minimumDate,
}) => {
  const theme = useTheme();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChanged = (event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date && onValueChange) {
      onValueChange(date);
    }
  };

  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      <ValueDisplayContainer isFocused={showDatePicker}>
        <PickerPressable
          onPress={() => setShowDatePicker((prevState) => !prevState)}
          rippleColor={theme.colors.background}
        >
          <Icon
            name="cake-variant"
            size={RFValue(24)}
            color={
              showDatePicker || value
                ? theme.colors.primary
                : theme.colors.placeholder
            }
          />

          {!!value && <ValueText>{format(value, 'dd/MM/yyyy')}</ValueText>}

          {!value && placeholder && (
            <ValueText isPlaceholder>{placeholder}</ValueText>
          )}
        </PickerPressable>
      </ValueDisplayContainer>

      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          onChange={handleDateChanged}
          value={value || new Date()}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
        />
      )}
    </Container>
  );
};
