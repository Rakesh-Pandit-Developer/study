import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const VideoAudio = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        HTML Video & Audio
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Video Element
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Audio Element
        </Typography>
        <Box sx={{ bgcolor: 'grey.100', p: 2, borderRadius: 1, mb: 2 }}>
          <pre style={{ margin: 0 }}>
            <code>{`<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>`}</code>
          </pre>
        </Box>

        <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 4 }}>
          Common Attributes
        </Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          <Typography component="li" variant="body1" paragraph>
            • controls - Adds play, pause, and volume controls
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • autoplay - Starts playing automatically
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • loop - Repeats when finished
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            • muted - Sets the initial state to muted
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default VideoAudio;
