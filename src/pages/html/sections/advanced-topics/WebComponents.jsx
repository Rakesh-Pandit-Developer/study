import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const WebComponents = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Web Components
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Custom Element Example
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`class InfoCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    const template = \`
      <style>
        :host {
          display: block;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .title { color: #2563eb; }
      </style>
      <h2 class="title"></h2>
      <div class="content">
        <slot></slot>
      </div>
    \`;
    
    shadow.innerHTML = template;
    shadow.querySelector('.title').textContent = 
      this.getAttribute('title') || 'Info Card';
  }
}

customElements.define('info-card', InfoCard);

// Usage:
/*
<info-card title="Custom Card">
  <p>This is a custom web component</p>
</info-card>
*/`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default WebComponents;
