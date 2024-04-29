import { Box, Button, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import IconifyIcon from "components/base/IconifyIcon";
import logo from "assets/logo/elegant-logo.png";
import { useLocation } from "react-router-dom";
import { theme } from "theme/theme";
import { navItems } from "data/navItems";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

const Sidebar = () => {

  const { pathname } = useLocation();

  return (
    <Box sx={{
      backgroundColor: 'white',
      height: '100%',
      overflowY: 'overlay',
      margin: { sm: '30px' },
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      scrollbarWidth: 'none',
    }}>
      <Box component="img" src={logo} sx={{
        marginTop: '50px',
        mx: '40px',
        mb: '30px',
      }} />
      <List sx={{
        mx: '20px',
        flex: '1 1 auto',
      }}>
        {/* <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <>
              <Button {...bindTrigger(popupState)}>
                Dashboard
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>My account</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </PopupState> */}
        {navItems.map((navItem, index) => (
          <ListItem key={index} disablePadding sx={{
            my: '10px',
            borderRadius: '8px',
            backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
            color: pathname === navItem.path ? '#FFF' : theme.palette.text.secondary,
            ":hover": {
              backgroundColor: pathname === navItem.path ? theme.palette.primary.main : 'lightgray',
              opacity: 1.5,
            },
          }}>
            <ListItemButton LinkComponent={Link} href={navItem.path}>
              <ListItemIcon>
                <IconifyIcon icon={navItem.icon} />
              </ListItemIcon>
              <ListItemText>{navItem.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{
        mx: '20px',
      }}>
        <ListItem disablePadding sx={{
          my: '20px',
          mx: 0,
        }}>
          <ListItemButton LinkComponent={Link} href="/" sx={{
            backgroundColor: '#FFF',
            color: theme.palette.primary.main,
            ":hover": {
              backgroundColor: theme.palette.primary.main,
              color: '#FFF',
              opacity: 1.5,
              "": {
                color: theme.palette.background.paper,
              }
            },

          }}>
            <ListItemIcon sx={{
              ":hover": {
                color: theme.palette.background.paper,
              },
            }}>
              <IconifyIcon icon="ri:logout-circle-line" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
