import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const FormValidation = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Form Validation
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Built-in Form Validation
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<form>
  <!-- Required Field -->
  <input type="text" required>

  <!-- Email Validation -->
  <input type="email" required>

  <!-- Pattern Matching -->
  <input type="text" pattern="[A-Za-z]{3}">

  <!-- Length Constraints -->
  <input type="text" minlength="3" maxlength="8">

  <!-- Number Range -->
  <input type="number" min="1" max="100">

  <!-- Custom Error Message -->
  <input type="text" required 
    oninvalid="this.setCustomValidity('Please fill out this field')"
    oninput="this.setCustomValidity('')"
  >

  <!-- Form Submission -->
  <button type="submit">Submit</button>
</form>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Validation Attributes
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • required - Field must be filled out
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • pattern - Regular expression pattern
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • minlength/maxlength - Text length limits
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • min/max - Numeric range limits
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormValidation;
