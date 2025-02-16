import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArticleIcon from '@mui/icons-material/Article';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme as useMuiTheme } from '@mui/material';

const SidebarWrapper = styled('div')(({ theme }) => ({
  width: 240,
  height: '100vh',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  overflow: 'auto',
  boxShadow: '4px 0 8px rgba(0,0,0,0.05)',
  position: 'fixed',
  top: 0,
  left: 0,
  paddingTop: 64, // Height of header
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '100vh',
    position: 'static',
    paddingTop: 0,
  },
  '& .MuiListItem-root': {
    borderRadius: theme.shape.borderRadius,
    margin: '4px 8px',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}10`,
      color: theme.palette.primary.main,
    },
  },
  '& .MuiListItemIcon-root': {
    minWidth: 40,
    color: theme.palette.primary.main,
  },
}));

const SidebarTitle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  fontSize: '1.25rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ActiveListItem = styled(ListItem)(({ theme, active }) => ({
  backgroundColor: active ? `${theme.palette.primary.main}15` : 'inherit',
  color: active ? theme.palette.primary.main : 'inherit',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}15`,
    color: theme.palette.primary.main,
  },
}));

const MobileToggle = styled(IconButton)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  bottom: 16,
  right: 16,
  zIndex: 1200,
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const BaseSidebar = ({ sections, title = "Contents" }) => {
  const [openSections, setOpenSections] = React.useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const theme = useMuiTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleToggle = (sectionTitle) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const sidebarContent = (
    <SidebarWrapper>
      <CloseButton onClick={handleDrawerToggle} color="primary">
        <CloseIcon />
      </CloseButton>
      <SidebarTitle>{title}</SidebarTitle>
      <Box sx={{ py: 2, mt: { xs: 0, md: 0 } }}>
        <List>
          {sections.map((section) => (
            <React.Fragment key={section.title}>
              <ListItem button onClick={() => handleToggle(section.title)}>
                <ListItemText 
                  primary={section.title}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    color: 'text.primary',
                  }}
                />
                {openSections[section.title] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openSections[section.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {section.items.map((item) => (
                    <ActiveListItem
                      key={item.path}
                      component={Link}
                      to={item.path}
                      button
                      active={location.pathname === item.path ? 1 : 0}
                      sx={{ pl: 4, py: 1 }}
                    >
                      <ListItemIcon>
                        <ArticleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.title}
                        primaryTypographyProps={{
                          variant: 'body2',
                          fontWeight: 500
                        }}
                      />
                    </ActiveListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </SidebarWrapper>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { md: 240 },
          flexShrink: 0,
          display: { xs: 'none', md: 'block' },
          position: 'relative', // Add this
        }}
      >
        {sidebarContent}
      </Box>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            height: '100vh',
            top: 0,
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      <MobileToggle
        color="primary"
        aria-label="open sidebar"
        onClick={handleDrawerToggle}
        size="large"
      >
        <MenuIcon />
      </MobileToggle>
    </>
  );
};

export default BaseSidebar;
