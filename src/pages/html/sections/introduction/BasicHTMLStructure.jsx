import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const BasicHTMLStructure = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Basic HTML Structure
      </Typography>

      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Essential Elements
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0, overflow: 'auto' }}>
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Element Breakdown
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • {'<!DOCTYPE html>'} - Declares HTML5 document type
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • {'<html>'} - Root element of the page
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • {'<head>'} - Contains meta information
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • {'<body>'} - Contains visible content
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BasicHTMLStructure;
