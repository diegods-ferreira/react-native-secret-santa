import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

// import { Container } from './styles';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(theme.colors).map((color) => (
        <View style={{ flex: 1, backgroundColor: theme.colors[color] }} />
      ))}
    </>
  );
};
