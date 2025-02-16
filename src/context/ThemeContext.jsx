import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                  main: '#1976d2',
                },
                background: {
                  default: '#ffffff',
                  paper: '#f5f5f5',
                },
                text: {
                  primary: '#1a1a1a',
                  secondary: '#666666',
                },
              }
            : {
                // Dark mode
                primary: {
                  main: '#90caf9',
                },
                background: {
                  default: '#1a1a1a',
                  paper: '#2d2d2d',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#b3b3b3',
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, colorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
