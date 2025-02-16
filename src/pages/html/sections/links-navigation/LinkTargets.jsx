import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const LinkTargets = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Link Targets
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Target Attributes
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!-- Different target values -->
<a href="url" target="_blank">Opens in new tab</a>
<a href="url" target="_self">Opens in same frame</a>
<a href="url" target="_parent">Opens in parent frame</a>
<a href="url" target="_top">Opens in full window</a>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Best Practices
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • Always use rel="noopener noreferrer" with target="_blank"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Indicate external links to users
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Use descriptive link text for accessibility
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LinkTargets;
