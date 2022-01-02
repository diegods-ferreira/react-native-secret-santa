import * as React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { WelcomeRoutes } from './welcome.routes';
import { AppRoutes } from './app.routes';

export interface NavigatorProps {
  screenOptions: NativeStackNavigationOptions;
}

export const Routes: React.FC = () => {
  const isUserAuthenticated = false;

  if (!isUserAuthenticated) {
    return <WelcomeRoutes />;
  }

  return <AppRoutes />;
};
