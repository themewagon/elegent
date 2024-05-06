import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
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
import { theme } from 'theme/theme';

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
          sx={{ mr: 2, ml: 0, display: { sm: 'none' }, bgcolor: 'inherit' }}
        >
          <IconifyIcon icon="mdi:menu" />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: { sm: 3.125, md: 6.25 },
            alignItems: 'center',
            flex: '1 1 auto',
          }}
        >
          <Typography variant="h5" component="h5">
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
            fullWidth
            sx={{ maxWidth: theme.spacing(41.25) }}
          />
        </Box>
        <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' }, mr: 'auto', bgcolor: 'inherit' }}>
          <IconifyIcon icon="mdi:search" width="24px" height="24px" />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <IconButton color="inherit" centerRipple sx={{ bgcolor: 'inherit' }}>
            <Badge badgeContent={1} color="primary">
              <IconifyIcon icon="carbon:notification-filled" width="24px" height="24px" />
            </Badge>
          </IconButton>
          <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ bgcolor: 'inherit', gap: 1.875 }}
          >
            <Avatar alt="Remy Sharp" src={profile} />
            <Typography variant="body1" component="p" color={theme.palette.text.primary}>
              Aiden Max
            </Typography>
            <IconifyIcon
              icon="ion:caret-down-outline"
              width="24px"
              height="24px"
              color={theme.palette.text.primary}
            />
          </Button>
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
