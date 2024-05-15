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

import CollapsibleNavButton from '../../../components/sections/dashboard/Home/common/CollapsibleNavButton';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';
import { navItems } from 'data/navItems';

const Sidebar = (): ReactElement => {
  return (
    <Stack
      justifyContent="space-between"
      bgcolor={(theme) => theme.palette.background.paper}
      height={1}
      sx={(theme) => ({
        overflowY: 'overlay',
        margin: { md: theme.spacing(3.75) },
        borderRadius: theme.shape.borderRadius * 1.25,
        scrollbarWidth: 'none',
      })}
    >
      <Link
        href="/"
        sx={(theme) => ({
          mt: theme.spacing(6.25),
          mx: theme.spacing(5),
          mb: theme.spacing(3.75),
        })}
      >
        <Image src={logo} width={1} />
      </Link>
      <List
        sx={(theme) => ({
          mx: theme.spacing(2.5),
          flex: '1 1 auto',
        })}
      >
        {navItems.map((navItem, index) => (
          <CollapsibleNavButton key={index} navItem={navItem} Link={Link} />
        ))}
      </List>
      <List
        sx={(theme) => ({
          mx: theme.spacing(2.5),
        })}
      >
        <ListItem
          disablePadding
          sx={(theme) => ({
            my: theme.spacing(2.5),
            mx: 0,
          })}
        >
          <ListItemButton
            LinkComponent={Link}
            href="/"
            sx={(theme) => ({
              backgroundColor: '#FFF',
              color: theme.palette.primary.main,
              ':hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                opacity: 1.5,
                '': {
                  color: theme.palette.background.paper,
                },
              },
            })}
          >
            <ListItemIcon
              sx={(theme) => ({
                ':hover': {
                  color: theme.palette.background.paper,
                },
              })}
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
