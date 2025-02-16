import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const GeolocationAPI = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Geolocation API
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Getting User Location
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`// Check for Geolocation support
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(\`Location: \${latitude}, \${longitude}\`);
    },
    // Error callback
    function(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied geolocation");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location unavailable");
          break;
        case error.TIMEOUT:
          console.error("Request timeout");
          break;
      }
    }
  );
} else {
  console.log("Geolocation not supported");
}`}</code>
          </pre>
        </Box>
      </Paper>
    </Box>
  );
};

export default GeolocationAPI;
