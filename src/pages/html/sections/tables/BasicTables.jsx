import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const BasicTables = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Tables
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Basic Table Structure
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default BasicTables;
