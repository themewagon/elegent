import { Box, Drawer, Grid, Stack } from '@mui/material';
import { PropsWithChildren, useState } from 'react';

import Sidebar from 'layouts/main-layout/Sidebar/Sidebar';
import Topbar from 'layouts/main-layout/Topbar/Topbar';

export const drawerWidth = 278;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row" minHeight="100vh" bgcolor={(theme) => theme.palette.background.default}>
      <Topbar
        handleDrawerToggle={handleDrawerToggle}
        open={open}
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
              backgroundColor: (theme) => theme.palette.background.paper,
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
              backgroundColor: (theme) => theme.palette.background.default,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Grid
        container
        component="main"
        columns={12}
        columnSpacing={3.75}
        rowSpacing={3.75}
        flexGrow={1}
        pt={2.5}
        pr={3.75}
        mt="85.125px"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          // pl: { md: 0 },
        }}
        pb={3.75}
      >
        {children}
      </Grid>
    </Stack>
  );
};

export default MainLayout;
