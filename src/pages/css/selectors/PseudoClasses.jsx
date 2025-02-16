import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PseudoClasses = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Pseudo-classes</Typography>
      <Typography variant="body1" paragraph>
        Pseudo-classes define a special state of an element.
      </Typography>

      <Typography variant="h6" gutterBottom>Common Pseudo-classes</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          a:hover {'{'} color: red; {'}'}<br/>
          input:focus {'{'} border: 2px solid blue; {'}'}<br/>
          li:first-child {'{'} font-weight: bold; {'}'}<br/>
          p:nth-child(2) {'{'} background: lightgrey; {'}'}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>Form Pseudo-classes</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          input:checked {'{'} background: green; {'}'}<br/>
          input:disabled {'{'} opacity: 0.5; {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default PseudoClasses;
