import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const InternalExternalLinks = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Internal & External Links
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Internal Links
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!-- Relative URLs -->
<a href="/about">About Page</a>
<a href="./contact.html">Contact</a>
<a href="#section1">Jump to Section</a>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          External Links
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!-- Absolute URLs -->
<a href="https://www.example.com">External Site</a>
<a href="https://www.example.com" rel="noopener">
  Safe External Link
</a>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default InternalExternalLinks;
