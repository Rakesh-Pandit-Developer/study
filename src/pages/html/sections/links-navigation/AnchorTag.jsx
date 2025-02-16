import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AnchorTag = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Anchor Tag
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Basic Syntax
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<a href="url">Link Text</a>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Common Attributes
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • href - Specifies the URL of the page the link goes to
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • target - Specifies where to open the linked document
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • rel - Specifies the relationship between current and linked document
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AnchorTag;
