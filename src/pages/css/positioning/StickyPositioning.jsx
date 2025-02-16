import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StickyPositioning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Sticky Positioning</Typography>
      <Typography variant="body1" paragraph>
        Sticky positioning toggles between relative and fixed positioning based on scroll position.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .sticky-element {'{'}<br/>
          &nbsp;&nbsp;position: sticky;<br/>
          &nbsp;&nbsp;top: 0;<br/>
          &nbsp;&nbsp;/* Sticks to top when scrolling reaches this element */<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="body1" paragraph>
        The element behaves like relative until a scroll threshold is met, then becomes fixed.
      </Typography>
    </Box>
  );
};

export default StickyPositioning;
