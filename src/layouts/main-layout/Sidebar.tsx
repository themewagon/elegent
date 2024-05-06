import {
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
import { theme } from 'theme/theme';
import { navItems } from 'data/navItems';
import Image from 'components/base/Image';
import CollapsibleNavButton from '../../components/sections/dashboard/common/CollapsibleNavButton';
import { useState } from 'react';

const Sidebar = () => {
  const [,] = useState(false);

  return (
    <Stack
      justifyContent="space-between"
      bgcolor={theme.palette.background.paper}
      height={1}
      sx={{
        overflowY: 'overlay',
        margin: { sm: theme.spacing(3.75) },
        borderRadius: theme.shape.borderRadius * 1.25,
        scrollbarWidth: 'none',
      }}
    >
      <Link href='/'>
        <Image
          src={logo}
          sx={{
            marginTop: '50px',
            mx: '40px',
            mb: '30px',
          }}
        />
      </Link>
      <List
        sx={{
          mx: '20px',
          flex: '1 1 auto',
        }}
      >
        {navItems.map((navItem, index) => (
          <CollapsibleNavButton key={index} navItem={navItem} Link={Link} />
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
