import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_APP_PREFIX } from '../utils/constants/async-storage';

type CustomTheme = 'light' | 'dark';

interface CustomThemeContextData {
  selectedCustomTheme: CustomTheme;
  toggleCustomTheme(): void;
}

const CustomThemeContext = createContext<CustomThemeContextData>(
  {} as CustomThemeContextData,
);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [selectedCustomTheme, setSelectedCustomTheme] =
    useState<CustomTheme>('light');

  const toggleCustomTheme = useCallback(async () => {
    const newTheme = selectedCustomTheme === 'light' ? 'dark' : 'light';

    setSelectedCustomTheme(newTheme);

    await AsyncStorage.setItem(`${ASYNC_STORAGE_APP_PREFIX}:theme`, newTheme);
  }, [selectedCustomTheme]);

  const getStoredTheme = async () => {
    const storedTheme = await AsyncStorage.getItem(
      `${ASYNC_STORAGE_APP_PREFIX}:theme`,
    );

    if (storedTheme) {
      setSelectedCustomTheme(storedTheme as CustomTheme);
    }
  };

  const providerValue = useMemo(
    () => ({ selectedCustomTheme, toggleCustomTheme }),
    [selectedCustomTheme, toggleCustomTheme],
  );

  useEffect(() => {
    getStoredTheme();
  }, []);

  return (
    <CustomThemeContext.Provider value={providerValue}>
      {children}
    </CustomThemeContext.Provider>
  );
};

function useCustomTheme(): CustomThemeContextData {
  const context = useContext(CustomThemeContext);

  if (!context) {
    throw new Error(
      'useCustomTheme must be used within an CustomThemeProvider',
    );
  }

  return context;
}

export { CustomThemeProvider, useCustomTheme };
