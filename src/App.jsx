import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './pages/home/Home';
import Html from './pages/html/Html';
import Css from './pages/css/Css';
import JavaScript from './pages/javascript/JavaScript';
import ReactPage from './pages/react/ReactPage';
import Header from './components/header/Header';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html/*" element={<Html />} />
          <Route path="/css/*" element={<Css />} />
          <Route path="/javascript/*" element={<JavaScript />} />
          <Route path="/react/*" element={<ReactPage />} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;