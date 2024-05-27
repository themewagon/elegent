import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
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
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius * 0.5,
          gap: 1.875,
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
            <IconifyIcon icon="ri:logout-circle-line" color={(theme) => theme.palette.error.main} />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountDropdown;
