import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const InputTypes = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Input Types
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Common Input Types
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<input type="text" placeholder="Enter text">
<input type="password" placeholder="Enter password">
<input type="email" placeholder="Enter email">
<input type="number" min="0" max="100">
<input type="date">
<input type="file">
<input type="checkbox">
<input type="radio">
<input type="color">
<input type="range" min="0" max="100">`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default InputTypes;
