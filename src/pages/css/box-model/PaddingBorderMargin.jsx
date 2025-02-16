import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PaddingBorderMargin = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Padding, Border, and Margin</Typography>
      <Typography variant="body1" paragraph>
        These three properties create the complete box model structure around elements.
      </Typography>

      <Typography variant="h6">Padding</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .element {'{'}<br/>
          &nbsp;&nbsp;padding: 10px;<br/>
          &nbsp;&nbsp;/* or */<br/>
          &nbsp;&nbsp;padding: 10px 20px 15px 25px;<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="h6">Border</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .element {'{'}<br/>
          &nbsp;&nbsp;border: 1px solid black;<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="h6">Margin</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .element {'{'}<br/>
          &nbsp;&nbsp;margin: 20px auto;<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default PaddingBorderMargin;
