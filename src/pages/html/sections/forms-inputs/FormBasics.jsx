import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const FormBasics = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Forms Basics
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Basic Form Structure
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <button type="submit">Submit</button>
</form>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormBasics;
