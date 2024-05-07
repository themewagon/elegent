import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';

import CollapsibleNavButton from '../../../components/sections/dashboard/common/CollapsibleNavButton';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';
import { navItems } from 'data/navItems';
import { theme } from 'theme/theme';

const Sidebar = () => {
  return (
    <Stack
      justifyContent="space-between"
      bgcolor={theme.palette.background.paper}
      height={1}
      sx={{
        overflowY: 'overlay',
        margin: { md: theme.spacing(3.75) },
        borderRadius: theme.shape.borderRadius * 1.25,
        scrollbarWidth: 'none',
      }}
    >
      <Link href="/">
        <Image
          src={logo}
          sx={{
            marginTop: theme.spacing(6.25),
            mx: theme.spacing(5),
            mb: theme.spacing(3.75),
          }}
        />
      </Link>
      <List
        sx={{
          mx: theme.spacing(2.5),
          flex: '1 1 auto',
        }}
      >
        {navItems.map((navItem, index) => (
          <CollapsibleNavButton key={index} navItem={navItem} Link={Link} />
        ))}
      </List>
      <List
        sx={{
          mx: theme.spacing(2.5),
        }}
      >
        <ListItem
          disablePadding
          sx={{
            my: theme.spacing(2.5),
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
                color: theme.palette.common.white,
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
