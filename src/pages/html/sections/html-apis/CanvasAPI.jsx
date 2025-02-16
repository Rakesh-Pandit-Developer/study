import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CanvasAPI = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML5 Canvas API
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Basic Canvas Usage
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<canvas id="myCanvas" width="200" height="100"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 150, 80);

// Draw a line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default CanvasAPI;
