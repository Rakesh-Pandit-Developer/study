import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import JavascriptIcon from '@mui/icons-material/Javascript';

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'HTML',
    description: 'Learn the foundation of web development with HTML5.',
    link: '/html'
  },
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'CSS',
    description: 'Master styling and layout with modern CSS.',
    link: '/css'
  },
  {
    icon: <JavascriptIcon sx={{ fontSize: 40 }} />,
    title: 'JavaScript',
    description: 'Build interactive websites with JavaScript.',
    link: '/javascript'
  },
  {
    icon: <DeveloperModeIcon sx={{ fontSize: 40 }} />,
    title: 'React',
    description: 'Create modern web applications with React.',
    link: '/react'
  }
];

export const Home = () => {
  return (
    <Box sx={{ mt: '64px', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.dark',
          color: 'white',
          py: 12,
          background: 'linear-gradient(45deg, #1d4ed8 30%, #7c3aed 90%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to DevLearning
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Your journey to becoming a web developer starts here
          </Typography>
          <Button
            component={Link}
            to="/html"
            variant="contained"
            color="secondary"
            size="large"
          >
            Start Learning
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          What You'll Learn
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => `0 12px 24px ${theme.palette.primary.light}20`,
                    transition: 'all 0.3s ease-in-out',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={feature.link}
                    variant="outlined"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
