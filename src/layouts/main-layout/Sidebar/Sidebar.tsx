import { ReactElement } from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';

import CollapsibleNavButton from './CollapsibleNavButton';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';
import { navItems } from 'data/nav-items';

const Sidebar = (): ReactElement => {
  return (
    <Stack
      justifyContent="space-between"
      bgcolor="background.paper"
      height={1}
      sx={{
        overflowY: 'overlay',
        margin: { md: 3.75 },
        borderRadius: 5,
        // scrollbarWidth: 'none',
      }}
    >
      <Link
        href="/"
        sx={{
          // position: 'absolute',
          // zIndex: 5,
          mt: 6.25,
          mx: 5,
          mb: 3.75,
        }}
      >
        <Image src={logo} width={1} />
      </Link>
      <List
        sx={{
          mx: 2.5,
          // mt: 16.25,
          py: 1.25,
          flex: '1 1 auto',
        }}
      >
        {navItems.map((navItem, index) => (
          <CollapsibleNavButton key={index} navItem={navItem} Link={Link} />
        ))}
      </List>
      <List
        sx={{
          mx: 2.5,
        }}
      >
        <ListItem
          sx={{
            mx: 0,
            my: 2.5,
          }}
        >
          <ListItemButton
            LinkComponent={Link}
            href="/"
            sx={{
              backgroundColor: 'background.paper',
              color: 'primary.main',
              ':hover': {
                backgroundColor: 'primary.main',
                color: 'common.white',
                opacity: 1.5,
              },
            }}
          >
            <ListItemIcon>
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
