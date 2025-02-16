import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ColorModels = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Color Models in CSS</Typography>
      <Typography variant="body1" paragraph>
        CSS supports various color models for defining colors in your stylesheets.
      </Typography>
      
      <Typography variant="h6" gutterBottom>Color Syntax Examples:</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .color-examples {'{'}<br/>
          &nbsp;&nbsp;color: #ff0000; /* Hexadecimal */<br/>
          &nbsp;&nbsp;color: rgb(255, 0, 0); /* RGB */<br/>
          &nbsp;&nbsp;color: rgba(255, 0, 0, 0.5); /* RGBA */<br/>
          &nbsp;&nbsp;color: hsl(0, 100%, 50%); /* HSL */<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default ColorModels;
