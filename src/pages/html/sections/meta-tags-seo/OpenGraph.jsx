import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const OpenGraph = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Open Graph Meta Tags
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Social Media Sharing Tags
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<head>
  <!-- Basic Open Graph Tags -->
  <meta property="og:title" content="Your Page Title">
  <meta property="og:description" content="Description for sharing">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:type" content="website">

  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@yourusername">
  <meta name="twitter:title" content="Your Page Title">
  <meta name="twitter:description" content="Description for sharing">
  <meta name="twitter:image" content="https://example.com/image.jpg">
</head>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default OpenGraph;
