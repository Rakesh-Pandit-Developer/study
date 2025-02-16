import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const WebStorage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Web Storage API
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          LocalStorage and SessionStorage
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`// LocalStorage
localStorage.setItem('username', 'John');
const username = localStorage.getItem('username');
localStorage.removeItem('username');

// SessionStorage
sessionStorage.setItem('token', '123456');
const token = sessionStorage.getItem('token');
sessionStorage.removeItem('token');

// Clear all stored data
localStorage.clear();
sessionStorage.clear();`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default WebStorage;
