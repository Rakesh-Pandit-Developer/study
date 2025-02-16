import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const HTMLWithJSandCSS = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML with JavaScript and CSS
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Modern Integration Example
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<!-- HTML Structure -->
<div class="dynamic-card" id="card">
  <h3 class="card-title">Interactive Card</h3>
  <div class="card-content">Click to transform</div>
</div>

<!-- CSS Styling -->
<style>
.dynamic-card {
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.dynamic-card:hover {
  transform: translateY(-5px);
}

.active {
  background: #2563eb;
  color: white;
}
</style>

<!-- JavaScript Interaction -->
<script>
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('active');
  
  const content = card.querySelector('.card-content');
  content.textContent = card.classList.contains('active') 
    ? 'Active State!' 
    : 'Click to transform';
});
</script>`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default HTMLWithJSandCSS;
