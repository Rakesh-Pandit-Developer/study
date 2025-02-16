import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactSidebar from '../../components/reactSidebar/ReactSidebar';

const ReactPage = () => {
  return (
    <Box sx={{ display: 'flex', mt: '64px' }}>
      <ReactSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '20px' }}>
        <Typography variant="h4" gutterBottom>Welcome to React</Typography>
        <Typography variant="body1" paragraph>
          React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.
        </Typography>
        <Typography variant="h6" gutterBottom>Basic React</Typography>
        <Typography variant="body1" paragraph>
          React components can be written as functions or classes. They accept inputs called props and return React elements.
        </Typography>
      </Box>
    </Box>
  );
};

export default ReactPage;