import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../context/ThemeContext';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  transition: 'all 0.3s ease',
  boxShadow: 'none',
}));

const StyledButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}08`,
    color: theme.palette.primary.main,
  },
}));

const MenuItems = [
  { title: 'Home', path: '/' },
  { title: 'HTML', path: '/html' },
  { title: 'CSS', path: '/css' },
  { title: 'JavaScript', path: '/javascript' },
  { title: 'React', path: '/react' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, colorMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledAppBar 
        position="fixed" 
        elevation={isScrolled ? 2 : 0}
        sx={{ 
          bgcolor: 'background.paper',
          borderBottom: theme => isScrolled ? 'none' : `1px solid ${theme.palette.divider}`
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'primary.main',
                  '&:hover': { opacity: 0.85 }
                }}
              >
                DevLearning
              </Box>
            </Link>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {MenuItems.map((item) => (
                <StyledButton
                  key={item.path}
                  component={Link}
                  to={item.path}
                  active={
                    location.pathname === item.path || 
                    (item.path !== '/' && location.pathname.startsWith(item.path)) 
                    ? 1 : 0
                  }
                >
                  {item.title}
                </StyledButton>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }} />
        
            <IconButton 
              onClick={colorMode.toggleColorMode} 
              color="inherit"
              sx={{ ml: 1 }}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '100%',
            height: '100vh',
            top: 0,
            maxWidth: 'none',
          },
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={handleDrawerToggle}>
              <Box sx={{ fontWeight: 700, fontSize: '1.5rem', color: 'primary.main' }}>
                DevLearning
              </Box>
            </Link>
            <IconButton onClick={handleDrawerToggle} color="primary">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </Container>
        <List sx={{ pt: 0 }}>
          {MenuItems.map((item) => (
            <ListItem 
              key={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderBottom: theme => `1px solid ${theme.palette.divider}`,
                py: 2,
                px: 3,
              }}
            >
              <StyledButton
                component={Link}
                to={item.path}
                fullWidth
                active={location.pathname === item.path ? 1 : 0}
                sx={{ 
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  py: 1.5
                }}
              >
                {item.title}
              </StyledButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;