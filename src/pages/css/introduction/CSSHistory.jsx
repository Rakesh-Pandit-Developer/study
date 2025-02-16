import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CSSHistory = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>History of CSS</Typography>
      <Typography variant="body1" paragraph>
        CSS was proposed by Håkon Wium Lie in 1994 while working at CERN with Tim Berners-Lee. 
        Before CSS, HTML documents were styled with presentation-oriented tags.
      </Typography>
      <Typography variant="h6" gutterBottom>Key Milestones:</Typography>
      <Typography component="div">
        <ul>
          <li>CSS1 was released in 1996</li>
          <li>CSS2 came in 1998</li>
          <li>CSS3 modules began rolling out in 1999</li>
          <li>Modern CSS is developed in modules</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default CSSHistory;
