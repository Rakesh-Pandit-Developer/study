import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FlexItems = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Flex Items</Typography>
      <Typography variant="body1" paragraph>
        Flex items are the direct children of a flex container. They can be manipulated using various flex properties.
      </Typography>
      
      <Typography variant="h6" gutterBottom>Flex Item Properties:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .item {'{'}<br/>
          &nbsp;&nbsp;flex-grow: 1;<br/>
          &nbsp;&nbsp;flex-shrink: 0;<br/>
          &nbsp;&nbsp;flex-basis: auto;<br/>
          &nbsp;&nbsp;/* shorthand */<br/>
          &nbsp;&nbsp;flex: 1 0 auto;<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default FlexItems;
