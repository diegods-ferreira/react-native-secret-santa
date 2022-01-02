import React from 'react';

import { CustomThemeProvider } from './custom-theme';

const AppProvider: React.FC = ({ children }) => (
  <CustomThemeProvider>{children}</CustomThemeProvider>
);

export default AppProvider;
