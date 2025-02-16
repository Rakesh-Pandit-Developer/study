import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Images = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Images
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Image Syntax
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<img src="path/to/image.jpg" alt="Description of image">
<img src="image.png" alt="Image" width="300" height="200">`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Important Attributes
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • src - Required. Specifies the path to the image
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • alt - Required. Provides alternative text for accessibility
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • width/height - Optional. Specifies dimensions
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • loading - Optional. Can be set to "lazy" for lazy loading
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Images;
