import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FlexContainer = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Flex Container</Typography>
      <Typography variant="body1" paragraph>
        A flex container is created by setting display: flex or display: inline-flex on an element.
      </Typography>
      
      <Typography variant="h6" gutterBottom>Basic Flex Container Properties:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .container {'{'}<br/>
          &nbsp;&nbsp;display: flex;<br/>
          &nbsp;&nbsp;flex-direction: row | column;<br/>
          &nbsp;&nbsp;justify-content: center;<br/>
          &nbsp;&nbsp;align-items: center;<br/>
          &nbsp;&nbsp;flex-wrap: wrap;<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default FlexContainer;
