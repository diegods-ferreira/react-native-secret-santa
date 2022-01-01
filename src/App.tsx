import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import { Home } from './screens/Home';

type Theme = 'light' | 'dark';

export const App: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>('light');

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <StatusBar style="auto" />

      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};
