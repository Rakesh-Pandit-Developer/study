import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const WhatIsHTML = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        What is HTML?
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Definition
        </Typography>
        <Typography variant="body1" paragraph>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.
        </Typography>
      </Paper>

      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Key Concepts
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • HTML uses tags to define elements
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Elements form the building blocks of HTML pages
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Browsers use HTML to structure and display content
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default WhatIsHTML;
