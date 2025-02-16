import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssSidebar from '../../components/CssSidebar/CssSidebar';
import Typography from '@mui/material/Typography';

// Import Introduction section components
import WhatIsCSS from './introduction/WhatIsCSS';
import CSSHistory from './introduction/CSSHistory';
import CSSSyntax from './introduction/CSSSyntax';

// Selectors
import BasicSelectors from './selectors/BasicSelectors';
import Combinators from './selectors/Combinators';
import PseudoClasses from './selectors/PseudoClasses';
import PseudoElements from './selectors/PseudoElements';

// Box Model
import ContentBox from './box-model/ContentBox';
import PaddingBorderMargin from './box-model/PaddingBorderMargin';
import BoxSizing from './box-model/BoxSizing';

const MainContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>Welcome to CSS</Typography>
    <Typography variant="body1" paragraph>
      CSS stands for Cascading Style Sheets. It is used to style and layout web pages.
    </Typography>
    <Typography variant="h6" gutterBottom>Basic CSS</Typography>
    <Typography variant="body1" paragraph>
      CSS can be used to control the color, font, spacing, and layout of HTML elements.
    </Typography>
  </Box>
);

const Css = () => {
  const location = useLocation();
  const isMainPath = location.pathname === '/css' || location.pathname === '/css/';

  return (
    <Box sx={{ display: 'flex', mt: '64px' }}>
      <CssSidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          ml: { xs: 0, md: '20px' },
          width: { xs: '100%', md: `calc(100% - 20px)` },
          minHeight: 'calc(100vh - 64px)', // Add this
        }}
      >
        {isMainPath ? (
          <MainContent />
        ) : (
          <Routes>
            {/* Introduction Section Routes */}
            <Route path="intro" element={<WhatIsCSS />} />
            <Route path="history" element={<CSSHistory />} />
            <Route path="syntax" element={<CSSSyntax />} />
            {/* Add other section routes following the same pattern */}

            {/* Selectors routes */}
            <Route path="basic-selectors" element={<BasicSelectors />} />
            <Route path="combinators" element={<Combinators />} />
            <Route path="pseudo-classes" element={<PseudoClasses />} />
            <Route path="pseudo-elements" element={<PseudoElements />} />

            {/* Box Model routes */}
            <Route path="content-box" element={<ContentBox />} />
            <Route path="padding-border-margin" element={<PaddingBorderMargin />} />
            <Route path="box-sizing" element={<BoxSizing />} />

            {/* Add other section routes as you create them */}
          </Routes>
        )}
      </Box>
    </Box>
  );
};

export default Css;