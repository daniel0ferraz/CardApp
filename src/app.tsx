import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Home from './screens/Home';
import RegisterExtract from './screens/RegisterExtract';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <RegisterExtract />
    </ThemeProvider>
  );
}
