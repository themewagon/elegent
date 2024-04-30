import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { drawerWidth } from 'layouts/main-layout';

import profile from 'assets/profile/profile.jpg';
import { MouseEventHandler } from 'react';

interface TopbarProps {
  handleDrawerToggle: MouseEventHandler;
  open?: any;
  handleClick?: MouseEventHandler;
  anchorEl?: null | HTMLElement;
  handleClose?: () => void;
}

const Topbar = ({ handleDrawerToggle, open, handleClick, anchorEl, handleClose }: TopbarProps) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px + 24px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, ml: 0, display: { sm: 'none' } }}
        >
          <IconifyIcon icon="mdi:menu" />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: { sm: 3.125, md: 6.25 },
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" noWrap component="h5">
            Dashboard
          </Typography>
          <TextField
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconifyIcon icon="mdi:search" width="100%" height="100%" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' }, mr: 'auto' }}>
          <IconifyIcon icon="mdi:search" width="24px" height="24px" />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <IconButton color="inherit">
            <Badge badgeContent={1} color="primary">
              <IconifyIcon icon="carbon:notification-filled" width="24px" height="24px" />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" src={profile} />
          <Typography variant="body1" component="p">
            Aiden Max
          </Typography>
          <IconButton
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <IconifyIcon icon="ion:caret-down-outline" width="24px" height="24px" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconifyIcon icon="ion:home-sharp" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconifyIcon icon="mdi:account-outline" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <IconifyIcon icon="material-symbols:settings" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleClose}
              disableRipple
              disableTouchRipple
              sx={{ color: 'error.main' }}
            >
              <ListItemIcon>
                <IconifyIcon icon="ri:logout-circle-line" color="#F54F5F" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
