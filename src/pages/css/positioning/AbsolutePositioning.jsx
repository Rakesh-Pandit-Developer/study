import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AbsolutePositioning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Absolute Positioning</Typography>
      <Typography variant="body1" paragraph>
        Absolute positioning removes the element from the normal document flow and positions it relative to its closest positioned ancestor.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .absolute-element {'{'}<br/>
          &nbsp;&nbsp;position: absolute;<br/>
          &nbsp;&nbsp;top: 0;<br/>
          &nbsp;&nbsp;right: 0;<br/>
          &nbsp;&nbsp;/* Positions relative to closest positioned ancestor */<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="body1" paragraph>
        If no positioned ancestors exist, it positions relative to the document body.
      </Typography>
    </Box>
  );
};

export default AbsolutePositioning;
