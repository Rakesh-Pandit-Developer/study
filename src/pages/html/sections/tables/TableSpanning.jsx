import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const TableSpanning = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Table Cell Spanning
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Colspan and Rowspan
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td rowspan="2">30</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default TableSpanning;
