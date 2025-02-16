import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import JavaScriptSidebar from '../../components/javascriptSidebar/JavaScriptSidebar';

const JavaScript = () => {
  return (
    <Box sx={{ display: 'flex', mt: '64px' }}>
      <JavaScriptSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '20px' }}>
        <Typography variant="h4" gutterBottom>Welcome to JavaScript</Typography>
        <Typography variant="body1" paragraph>
          JavaScript is a programming language that allows you to create dynamic and interactive web content.
        </Typography>
        <Typography variant="h6" gutterBottom>Basic JavaScript</Typography>
        <Typography variant="body1" paragraph>
          JavaScript can be used to manipulate HTML elements, handle events, and perform calculations.
        </Typography>
      </Box>
    </Box>
  );
};

export default JavaScript;