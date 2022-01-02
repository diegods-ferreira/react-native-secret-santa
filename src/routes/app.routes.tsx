import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator();

const MockScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#ffffff' }}>Hello World!</Text>
  </View>
);

export const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={MockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
