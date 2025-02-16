import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BasicSelectors = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Basic Selectors</Typography>
      <Typography variant="body1" paragraph>
        CSS selectors are used to "find" (or select) the HTML elements you want to style.
      </Typography>
      <Typography variant="body1" paragraph>
        We can divide CSS selectors into five categories:
      </Typography>
      <Typography variant="body1" paragraph>
        - Simple selectors (select elements based on name, id, class)
        - Combinator selectors (select elements based on a specific relationship between them)
        - Pseudo-class selectors (select elements based on a certain state)
        - Pseudo-elements selectors (select and style a part of an element)
        - Attribute selectors (select elements based on an attribute or attribute value)
      </Typography>
    </Box>
  );
};

export default BasicSelectors;