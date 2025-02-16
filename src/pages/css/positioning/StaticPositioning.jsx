import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StaticPositioning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Static Positioning</Typography>
      <Typography variant="body1" paragraph>
        Static positioning is the default position for all elements. Elements appear in their natural order in the document flow.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .static-element {'{'}<br/>
          &nbsp;&nbsp;position: static;<br/>
          &nbsp;&nbsp;/* Top, right, bottom, left have no effect */<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default StaticPositioning;
