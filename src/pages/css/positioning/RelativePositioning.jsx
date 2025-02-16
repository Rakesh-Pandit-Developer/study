import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RelativePositioning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Relative Positioning</Typography>
      <Typography variant="body1" paragraph>
        Relative positioning allows you to position an element relative to its normal position in the document flow.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .relative-element {'{'}<br/>
          &nbsp;&nbsp;position: relative;<br/>
          &nbsp;&nbsp;top: 10px;<br/>
          &nbsp;&nbsp;left: 20px;<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="body1" paragraph>
        The element moves relative to its original position without affecting other elements.
      </Typography>
    </Box>
  );
};

export default RelativePositioning;
