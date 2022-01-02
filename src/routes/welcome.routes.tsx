import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import { WelcomeRoutesParams } from '../data/routes/welcome';

import { Welcome } from '../screens/Welcome';
import { WelcomeUser } from '../screens/WelcomeUser';

const Stack = createNativeStackNavigator<WelcomeRoutesParams>();

export const WelcomeRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
