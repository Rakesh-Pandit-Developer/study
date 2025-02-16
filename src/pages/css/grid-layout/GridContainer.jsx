import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const GridContainer = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Grid Container</Typography>
      <Typography variant="body1" paragraph>
        A grid container is created by setting display: grid on an element. It establishes a new grid formatting context.
      </Typography>
      
      <Typography variant="h6" gutterBottom>Grid Container Properties:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .grid-container {'{'}<br/>
          &nbsp;&nbsp;display: grid;<br/>
          &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br/>
          &nbsp;&nbsp;grid-gap: 20px;<br/>
          &nbsp;&nbsp;grid-auto-rows: minmax(100px, auto);<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default GridContainer;
