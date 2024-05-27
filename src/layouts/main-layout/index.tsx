import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Box, Drawer, Stack, Toolbar } from '@mui/material';

import Sidebar from 'layouts/main-layout/Sidebar/Sidebar';
import Topbar from 'layouts/main-layout/Topbar/Topbar';
import { useLocation } from 'react-router-dom';

export const drawerWidth = 278;

const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();

  useEffect(() => console.log(location), [location]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack direction="row" minHeight="100vh" bgcolor={(theme) => theme.palette.background.default}>
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={(theme) => ({
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
              backgroundColor: theme.palette.background.paper,
            },
          })}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={(theme) => ({
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
              backgroundColor: theme.palette.background.default,
            },
          })}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Toolbar
        sx={(theme) => ({
          p: theme.spacing(12, 0, 0, 0),
          width: 1,
        })}
      >
        {children}
      </Toolbar>
    </Stack>
  );
};

export default MainLayout;
