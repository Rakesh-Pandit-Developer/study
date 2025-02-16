import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const SemanticElements = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Semantic HTML Elements
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Common Semantic Elements
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<header>Site or section header</header>
<nav>Navigation menu</nav>
<main>Main content area</main>
<article>Independent content</article>
<section>Grouped content</section>
<aside>Sidebar content</aside>
<footer>Site or section footer</footer>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default SemanticElements;
