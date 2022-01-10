import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import { DrawerContent } from '../components/DrawerContent';

const MockScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#000000' }}>Hello World!</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const DrawerContentComponent = (props: DrawerContentComponentProps) => (
  <DrawerContent {...props} />
);

export const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        drawerContent={DrawerContentComponent}
      >
        <Drawer.Screen name="Home" component={MockScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
