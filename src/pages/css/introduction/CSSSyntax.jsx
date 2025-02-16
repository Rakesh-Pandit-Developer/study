import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CSSSyntax = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>CSS Syntax</Typography>
      <Typography variant="body1" paragraph>
        CSS syntax consists of a selector and a declaration block. The selector points to the HTML element 
        you want to style, and the declaration block contains properties and values.
      </Typography>
      <Typography variant="h6" gutterBottom>Basic Syntax Structure:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, my: 2 }}>
        <code>
          selector {'{'}
          <br />
          &nbsp;&nbsp;property: value;
          <br />
          {'}'}
        </code>
      </Box>
      <Typography variant="body1" paragraph>
        For example: h1 {'{'} color: blue; font-size: 12px; {'}'}
      </Typography>
    </Box>
  );
};

export default CSSSyntax;
