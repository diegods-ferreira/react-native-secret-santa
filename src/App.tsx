import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';

import theme from './global/styles/theme';

import { Welcome } from './screens/Welcome';

type Theme = 'light' | 'dark';

export const App: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>('light');

  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <StatusBar
        style={selectedTheme === 'dark' ? 'light' : 'dark'}
        backgroundColor={theme[selectedTheme].colors.primary}
        translucent
      />

      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Welcome />
        </GestureHandlerRootView>
      </SafeAreaView>
    </ThemeProvider>
  );
};
