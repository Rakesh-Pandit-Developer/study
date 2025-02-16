import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const ContentBox = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Content Box</Typography>
      <Typography variant="body1" paragraph>
        The content box is the area where your content is displayed, which can be sized using properties like width and height.
      </Typography>
      
      <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
        <code>
          .content-box {'{'}<br/>
          &nbsp;&nbsp;width: 200px;<br/>
          &nbsp;&nbsp;height: 100px;<br/>
          &nbsp;&nbsp;background-color: #f0f0f0;<br/>
          {'}'}
        </code>
      </Box>
    </Box>
  );
};

export default ContentBox;
