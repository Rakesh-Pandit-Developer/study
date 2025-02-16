import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const GlobalAttributes = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Global Attributes
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Common Global Attributes
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • class - Specifies classes for styling
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • id - Unique identifier for elements
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • style - Inline CSS styling
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • title - Additional information about an element
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default GlobalAttributes;
