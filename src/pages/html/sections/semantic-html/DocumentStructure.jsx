import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const DocumentStructure = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Semantic Document Structure
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Modern HTML5 Layout
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Layout</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <section>
                <h1>Main Content</h1>
                <p>Content goes here...</p>
            </section>
        </article>

        <aside>
            <h2>Related Info</h2>
            <p>Sidebar content...</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default DocumentStructure;
