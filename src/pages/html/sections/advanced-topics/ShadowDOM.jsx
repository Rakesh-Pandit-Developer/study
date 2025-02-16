import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ShadowDOM = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Shadow DOM
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Understanding Shadow DOM
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`// Create a custom element with Shadow DOM
const element = document.createElement('div');
const shadow = element.attachShadow({ mode: 'open' });

// Create styles
const styles = document.createElement('style');
styles.textContent = \`
  .wrapper {
    position: relative;
    padding: 10px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
\`;

// Create content
const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
wrapper.textContent = 'This content is in the Shadow DOM';

// Attach everything to shadow DOM
shadow.appendChild(styles);
shadow.appendChild(wrapper);

// Use the element
document.body.appendChild(element);`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Key Features
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • Encapsulated DOM tree
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Scoped CSS
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • Isolated from main document
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ShadowDOM;
