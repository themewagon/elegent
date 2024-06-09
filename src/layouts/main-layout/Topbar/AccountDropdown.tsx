import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, ReactElement, useState } from 'react';
import profile from 'assets/profile/profile.jpg';

const AccountDropdown = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        color="inherit"
        id="account-dropdown-button"
        aria-controls={open ? 'account-dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          borderRadius: 2,
          gap: 1.875,
        }}
      >
        <Tooltip title="Aiden Max" arrow>
          <Avatar alt="Aiden Max" src={profile} sx={{ width: 45, height: 45 }} />
        </Tooltip>
        <Typography variant="body1" component="p" color="text.primary">
          Aiden Max
        </Typography>
        <IconifyIcon icon="ion:caret-down-outline" width={24} height={24} color="text.primary" />
      </Button>
      <Menu
        id="account-dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'account-dropdown-button',
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
            <IconifyIcon icon="ri:logout-circle-line" color="error.main" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountDropdown;
