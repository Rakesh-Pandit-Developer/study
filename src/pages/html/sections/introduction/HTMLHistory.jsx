import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const TimelineItem = ({ year, content }) => (
  <Box sx={{ mb: 4, position: 'relative', pl: 4 }}>
    <Box sx={{
      position: 'absolute',
      left: -2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      bgcolor: 'primary.main',
    }} />
    <Typography variant="h6" color="primary">{year}</Typography>
    <Typography>{content}</Typography>
  </Box>
);

const HTMLHistory = () => {
  const timelineItems = [
    { year: '1991', content: 'HTML was created by Tim Berners-Lee' },
    { year: '1995', content: 'HTML 2.0 was developed' },
    { year: '1997', content: 'HTML 3.2 was published' },
    { year: '1999', content: 'HTML 4.01 was released' },
    { year: '2014', content: 'HTML5 becomes recommended' }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML History & Versions
      </Typography>

      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ 
          position: 'relative', 
          ml: 2, 
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'primary.light',
          }
        }}>
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={item.year}
              year={item.year}
              content={item.content}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default HTMLHistory;
