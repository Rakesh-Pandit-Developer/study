import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Headings = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Headings
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Heading Levels
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Best Practices
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • Use only one h1 per page
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Maintain heading hierarchy
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Use headings for structure, not styling
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Headings;
