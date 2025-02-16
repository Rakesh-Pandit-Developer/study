import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FontFamilies = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Font Families</Typography>
      <Typography variant="body1" paragraph>
        Font families define the typeface used for text elements. They can be generic families or specific fonts.
      </Typography>
      
      <Typography variant="h6" gutterBottom>Font Family Examples:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .text {'{'}<br/>
          &nbsp;&nbsp;font-family: Arial, Helvetica, sans-serif;<br/>
          &nbsp;&nbsp;/* Generic families */<br/>
          &nbsp;&nbsp;font-family: serif | sans-serif | monospace;<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default FontFamilies;
