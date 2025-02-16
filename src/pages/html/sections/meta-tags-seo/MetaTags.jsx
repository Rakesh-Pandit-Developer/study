import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MetaTags = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Meta Tags
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Common Meta Tags
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!DOCTYPE html>
<html>
<head>
    <!-- Character Encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport Settings -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="A detailed description of your page">
    <meta name="keywords" content="key, words, for, seo">
    <meta name="author" content="Author Name">
    
    <!-- Robots Control -->
    <meta name="robots" content="index, follow">
    
    <!-- Cache Control -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    
    <!-- Theme Color for Browsers -->
    <meta name="theme-color" content="#4285f4">
</head>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default MetaTags;
