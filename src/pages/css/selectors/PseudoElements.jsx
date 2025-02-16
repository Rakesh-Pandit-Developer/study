import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PseudoElements = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Pseudo-elements</Typography>
      <Typography variant="body1" paragraph>
        Pseudo-elements allow you to style a specific part of an element.
      </Typography>

      <Typography variant="h6" gutterBottom>Common Pseudo-elements</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          p::first-line {'{'} font-weight: bold; {'}'}<br/>
          p::first-letter {'{'} font-size: 200%; {'}'}<br/>
          div::before {'{'} content: "→"; {'}'}<br/>
          div::after {'{'} content: "←"; {'}'}
        </code>
      </Box>

      <Typography variant="body1" paragraph>
        Note: Pseudo-elements use double colons (::) to distinguish them from pseudo-classes.
      </Typography>
    </Box>
  );
};

export default PseudoElements;
