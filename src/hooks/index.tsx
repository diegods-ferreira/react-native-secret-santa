import React from 'react';

import { CustomThemeProvider } from './custom-theme';
import { UserProvider } from './user';

const AppProvider: React.FC = ({ children }) => (
  <CustomThemeProvider>
    <UserProvider>{children}</UserProvider>
  </CustomThemeProvider>
);

export default AppProvider;
