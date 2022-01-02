import * as React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { WelcomeRoutes } from './welcome.routes';
import { AppRoutes } from './app.routes';

import { useCustomTheme } from '../hooks/custom-theme';

import theme from '../global/styles/theme';

export interface NavigatorProps {
  screenOptions: NativeStackNavigationOptions;
}

export const Routes: React.FC = () => {
  const { selectedCustomTheme } = useCustomTheme();

  const isUserAuthenticated = false;

  return (
    <ThemeProvider theme={theme[selectedCustomTheme]}>
      <StatusBar
        style="light"
        backgroundColor={theme[selectedCustomTheme].colors.primary}
        translucent
      />

      {isUserAuthenticated ? <AppRoutes /> : <WelcomeRoutes />}
    </ThemeProvider>
  );
};
