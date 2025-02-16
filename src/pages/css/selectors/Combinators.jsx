import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Combinators = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>CSS Combinators</Typography>
      <Typography variant="body1" paragraph>
        Combinators explain the relationship between selectors.
      </Typography>

      <Typography variant="h6" gutterBottom>Descendant Selector (space)</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          div p {'{'} color: blue; {'}'}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>Child Selector (>)</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          div > p {'{'} color: red; {'}'}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>Adjacent Sibling (+)</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          h1 + p {'{'} margin-top: 20px; {'}'}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>General Sibling (~)</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          h1 ~ p {'{'} color: grey; {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default Combinators;
