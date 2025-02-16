import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FixedPositioning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Fixed Positioning</Typography>
      <Typography variant="body1" paragraph>
        Fixed positioning keeps an element in the same position even when the page is scrolled.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .fixed-element {'{'}<br/>
          &nbsp;&nbsp;position: fixed;<br/>
          &nbsp;&nbsp;bottom: 20px;<br/>
          &nbsp;&nbsp;right: 20px;<br/>
          &nbsp;&nbsp;/* Stays in viewport even when scrolling */<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default FixedPositioning;
