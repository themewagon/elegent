import {
  Collapse,
  LinkTypeMap,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from 'theme/theme';

interface NavItemProps {
  navItem?: any;
  Link: OverridableComponent<LinkTypeMap>;
  // open: boolean;
}

const CollapsibleNavButton = ({ navItem, Link }: NavItemProps) => {
  const { pathname } = useLocation();
  const [checked, setChecked] = useState(false);

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        my: '10px',
        borderRadius: '8px',
        backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
        color: pathname === navItem.path ? '#FFF' : theme.palette.text.secondary,
        ':hover': {
          backgroundColor: pathname === navItem.path ? theme.palette.primary.main : 'lightgray',
          opacity: 1.5,
        },
      }}
    >
      {navItem.collapsible ? (
        <>
          <ListItemButton
            LinkComponent={Link}
            // href={navItem.path}
            onClick={() => setChecked(!checked)}
            sx={{
              width: 1,
            }}
          >
            <ListItemIcon>
              <IconifyIcon icon={navItem.icon} />
            </ListItemIcon>
            <ListItemText>{navItem.title}</ListItemText>
            <ListItemIcon>
              {navItem.collapsible && <IconifyIcon icon="mingcute:down-fill" />}
            </ListItemIcon>
          </ListItemButton>
          <Collapse
            in={checked}
            sx={{
              width: 1,
            }}
          >
            <List>
              {navItem.sublist.map((subListItem: any, idx: number) => (
                <ListItem key={idx} disablePadding>
                  <ListItemButton
                    LinkComponent={Link}
                    href={subListItem.path}
                    sx={{
                      width: 1,
                    }}
                  >
                    <ListItemText>{subListItem.title}</ListItemText>
                    <ListItemIcon>
                      {subListItem.collapsible && <IconifyIcon icon="mingcute:down-fill" />}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton
          LinkComponent={Link}
          href={navItem.path}
          sx={{
            width: 1,
          }}
        >
          <ListItemIcon>
            <IconifyIcon icon={navItem.icon} />
          </ListItemIcon>
          <ListItemText>{navItem.title}</ListItemText>
          <ListItemIcon>
            {navItem.collapsible && <IconifyIcon icon="mingcute:down-fill" />}
          </ListItemIcon>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default CollapsibleNavButton;
