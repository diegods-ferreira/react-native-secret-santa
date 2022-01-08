import React, { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Control, Controller } from 'react-hook-form';

import {
  Label,
  PickerPressable,
  ValueDisplayContainer,
  Icon,
  ValueText,
  Container,
  Error,
} from './styles';

interface DateInputProps {
  label?: string;
  placeholder?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  name: string;
  control: Control;
  error?: {
    message: string;
  };
  defaultValue?: Date;
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  maximumDate,
  minimumDate,
  name,
  control,
  error,
  defaultValue,
}) => {
  const theme = useTheme();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChanged = (
    date: Date | undefined,
    onChange: (...event: any[]) => void,
  ) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date) {
      onChange(date);
    }
  };

  return (
    <Container>
      {!!label && <Label>{label}</Label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <>
            <ValueDisplayContainer
              isFocused={showDatePicker}
              isErrored={!!error}
            >
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

                {!!value && (
                  <ValueText>{format(value, 'dd/MM/yyyy')}</ValueText>
                )}

                {!value && placeholder && (
                  <ValueText isPlaceholder>{placeholder}</ValueText>
                )}
              </PickerPressable>
            </ValueDisplayContainer>

            {showDatePicker && (
              <DateTimePicker
                mode="date"
                display="calendar"
                onChange={(event, date) => handleDateChanged(date, onChange)}
                value={value || new Date()}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
              />
            )}
          </>
        )}
      />

      {!!error && <Error>{error.message}</Error>}
    </Container>
  );
};
