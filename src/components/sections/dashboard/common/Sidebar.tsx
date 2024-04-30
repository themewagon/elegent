import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';

import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import { useLocation } from 'react-router-dom';
import { theme } from 'theme/theme';
import { navItems } from 'data/navItems';
import Image from 'components/base/Image';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      justifyContent="space-between"
      bgcolor={theme.palette.background.paper}
      height="100%"
      sx={{
        overflowY: 'overlay',
        margin: { sm: theme.spacing(3.75) },
        borderRadius: theme.spacing(2.5),
        scrollbarWidth: 'none',
      }}
    >
      <Image
        src={logo}
        sx={{
          marginTop: '50px',
          mx: '40px',
          mb: '30px',
        }}
      />
      <List
        sx={{
          mx: '20px',
          flex: '1 1 auto',
        }}
      >
        {navItems.map((navItem, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              my: '10px',
              borderRadius: '8px',
              backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
              color: pathname === navItem.path ? '#FFF' : theme.palette.text.secondary,
              ':hover': {
                backgroundColor:
                  pathname === navItem.path ? theme.palette.primary.main : 'lightgray',
                opacity: 1.5,
              },
            }}
          >
            <ListItemButton LinkComponent={Link} href={navItem.path}>
              <ListItemIcon>
                <IconifyIcon icon={navItem.icon} />
              </ListItemIcon>
              <ListItemText>{navItem.title}</ListItemText>
              <ListItemIcon>
                {navItem.collapsible && <IconifyIcon icon="mingcute:down-fill" />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          mx: '20px',
        }}
      >
        <ListItem
          disablePadding
          sx={{
            my: '20px',
            mx: 0,
          }}
        >
          <ListItemButton
            LinkComponent={Link}
            href="/"
            sx={{
              backgroundColor: '#FFF',
              color: theme.palette.primary.main,
              ':hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#FFF',
                opacity: 1.5,
                '': {
                  color: theme.palette.background.paper,
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                ':hover': {
                  color: theme.palette.background.paper,
                },
              }}
            >
              <IconifyIcon icon="ri:logout-circle-line" />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Sidebar;
