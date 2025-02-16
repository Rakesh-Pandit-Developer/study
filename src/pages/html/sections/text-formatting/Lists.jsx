import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Lists = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Lists
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Types of Lists
        </Typography>

        {/* Unordered List */}
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Unordered List
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`}</code>
          </pre>
        </Box>

        {/* Ordered List */}
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Ordered List
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}</code>
          </pre>
        </Box>

        {/* Definition List */}
        <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
          Definition List
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default Lists;
