import * as React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useCustomTheme } from '../hooks/custom-theme';
import { useUser } from '../hooks/user';

import { WelcomeRoutes } from './welcome.routes';
import { AppRoutes } from './app.routes';

import theme from '../global/styles/theme';

export interface NavigatorProps {
  screenOptions: NativeStackNavigationOptions;
}

export const Routes: React.FC = () => {
  const { selectedCustomTheme } = useCustomTheme();

  const { user, loadingUser } = useUser();

  if (loadingUser) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme[selectedCustomTheme]}>
      <StatusBar
        style="light"
        backgroundColor={theme[selectedCustomTheme].colors.primary}
        translucent
      />

      {user.name && user.birthDate ? <AppRoutes /> : <WelcomeRoutes />}
    </ThemeProvider>
  );
};
