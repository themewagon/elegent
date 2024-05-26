import { MouseEventHandler, ReactElement } from 'react';
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
import { useLocation } from 'react-router-dom';
import capitalizePathname from 'helpers/capitalizePathname';

interface TopbarProps {
  handleDrawerToggle: MouseEventHandler;
  open?: any;
  handleClick?: MouseEventHandler;
  anchorEl?: null | HTMLElement;
  handleClose?: () => void;
}

const Topbar = ({
  handleDrawerToggle,
  open,
  handleClick,
  anchorEl,
  handleClose,
}: TopbarProps): ReactElement => {
  const { pathname } = useLocation();
  const title = capitalizePathname(pathname);

  return (
    <AppBar
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px + 24px)` },
        ml: { lg: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={(theme) => ({
          p: theme.spacing(3.75),
        })}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, ml: 0, display: { lg: 'none' }, bgcolor: 'inherit' }}
        >
          <IconifyIcon icon="mdi:menu" />
        </IconButton>
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            gap: { sm: 3.125, md: 6.25 },
            alignItems: 'center',
            flex: '1 1 auto',
          }}
        >
          <Typography variant="h5" component="h5">
            {pathname === '/' ? 'Dashboard' : title}
          </Typography>
          <TextField
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconifyIcon icon="mdi:search" width={1} height={1} />
                </InputAdornment>
              ),
            }}
            fullWidth
            sx={(theme) => ({ maxWidth: theme.spacing(41.25) })}
          />
        </Box>
        <IconButton
          color="inherit"
          sx={{ display: { xs: 'flex', lg: 'none' }, mr: 'auto', bgcolor: 'inherit' }}
        >
          <IconifyIcon
            icon="mdi:search"
            width={(theme) => theme.spacing(3)}
            height={(theme) => theme.spacing(3)}
          />
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
              <IconifyIcon
                icon="carbon:notification-filled"
                width={(theme) => theme.spacing(3)}
                height={(theme) => theme.spacing(3)}
              />
            </Badge>
          </IconButton>
          <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={(theme) => ({
              borderRadius: theme.shape.borderRadius * 0.5,
              bgcolor: open ? '#0000000A' : 'inherit',
              gap: 1.875,
              ':hover': { bgcolor: '#0000000A' },
            })}
          >
            <Avatar
              alt="Remy Sharp"
              src={profile}
              sx={(theme) => ({ width: theme.spacing(5.625), height: theme.spacing(5.625) })}
            />
            <Typography variant="body1" component="p" color={(theme) => theme.palette.text.primary}>
              Aiden Max
            </Typography>
            <IconifyIcon
              icon="ion:caret-down-outline"
              width={(theme) => theme.spacing(3)}
              height={(theme) => theme.spacing(3)}
              color={(theme) => theme.palette.text.primary}
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
              sx={(theme) => ({ color: theme.palette.error.main })}
            >
              <ListItemIcon>
                <IconifyIcon
                  icon="ri:logout-circle-line"
                  color={(theme) => theme.palette.error.main}
                />
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
