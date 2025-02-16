import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const TagsElements = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Tags & Elements
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Understanding HTML Elements
        </Typography>
        <Typography variant="body1" paragraph>
          HTML elements are the building blocks of HTML pages. An element is defined by a start tag, some content, and an end tag.
        </Typography>

        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<tagname>content</tagname>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default TagsElements;
