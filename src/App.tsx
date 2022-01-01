import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
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

import { Home } from './screens/Home';

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
      <StatusBar style="auto" />

      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};
