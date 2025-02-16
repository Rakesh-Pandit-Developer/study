import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BoxSizing = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Box Sizing</Typography>
      <Typography variant="body1" paragraph>
        Box-sizing defines how the width and height of an element are calculated.
      </Typography>

      <Typography variant="h6">Content-box (Default)</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .content-box {'{'}<br/>
          &nbsp;&nbsp;box-sizing: content-box;<br/>
          &nbsp;&nbsp;/* width and height only include content */<br/>
          {'}'}
        </code>
      </Box>

      <Typography variant="h6">Border-box</Typography>
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .border-box {'{'}<br/>
          &nbsp;&nbsp;box-sizing: border-box;<br/>
          &nbsp;&nbsp;/* width and height include padding and border */<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default BoxSizing;
