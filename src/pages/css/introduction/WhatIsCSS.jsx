import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const WhatIsCSS = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>What is CSS?</Typography>
      <Typography variant="body1" paragraph>
        CSS stands for Cascading Style Sheets. It is used to style and layout web pages.
      </Typography>
      <Typography variant="body1" paragraph>
        CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
      </Typography>
      <Typography variant="body1" paragraph>
        CSS saves a lot of work. It can control the layout of multiple web pages all at once.
      </Typography>
    </Box>
  );
};

export default WhatIsCSS;