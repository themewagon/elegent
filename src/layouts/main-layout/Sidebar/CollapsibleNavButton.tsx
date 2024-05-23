import { ReactElement, useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';

interface NavItemProps {
  navItem?: any;
  Link: OverridableComponent<LinkTypeMap>;
}

const CollapsibleNavButton = ({ navItem, Link }: NavItemProps): ReactElement => {
  const { pathname } = useLocation();
  const [checked, setChecked] = useState(false);
  const [nestedChecked, setNestedChecked] = useState<boolean[]>([]);

  const handleNestedChecked = (index: any, value: boolean) => {
    const updatedBooleanArray = [...nestedChecked];
    updatedBooleanArray[index] = value;
    setNestedChecked(updatedBooleanArray);
  };

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <ListItem
      sx={(theme) => ({
        my: theme.spacing(1.25),
        borderRadius: theme.shape.borderRadius * 0.5,
        backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
        color:
          pathname === navItem.path ? theme.palette.common.white : theme.palette.text.secondary,
        ':hover': {
          backgroundColor:
            pathname === navItem.path ? theme.palette.primary.main : theme.palette.action.focus,
          opacity: 1.5,
        },
      })}
    >
      {navItem.collapsible ? (
        <>
          <ListItemButton LinkComponent={Link} onClick={() => setChecked(!checked)}>
            <ListItemIcon>
              <IconifyIcon icon={navItem.icon} width={1} height={1} />
            </ListItemIcon>
            <ListItemText>{navItem.title}</ListItemText>
            <ListItemIcon>
              {navItem.collapsible &&
                (checked ? (
                  <IconifyIcon icon="mingcute:up-fill" width={1} height={1} />
                ) : (
                  <IconifyIcon icon="mingcute:down-fill" width={1} height={1} />
                ))}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={checked}>
            <List>
              {navItem.sublist.map((subListItem: any, idx: number) => (
                <ListItem
                  key={idx}
                  sx={(theme) => ({
                    backgroundColor: pathname === navItem.path ? theme.palette.primary.main : '',
                    color:
                      pathname === navItem.path
                        ? theme.palette.common.white
                        : theme.palette.text.secondary,
                    ':hover': {
                      backgroundColor:
                        pathname === navItem.path
                          ? theme.palette.primary.main
                          : theme.palette.action.focus,
                      opacity: 1.5,
                    },
                  })}
                >
                  {subListItem.collapsible ? (
                    <>
                      <ListItemButton
                        LinkComponent={Link}
                        onClick={() => {
                          handleNestedChecked(idx, !nestedChecked[idx]);
                        }}
                      >
                        <ListItemText sx={(theme) => ({ ml: theme.spacing(3.5) })}>
                          {subListItem.title}
                        </ListItemText>
                        <ListItemIcon>
                          {subListItem.collapsible &&
                            (nestedChecked[idx] ? (
                              <IconifyIcon icon="mingcute:up-fill" width={1} height={1} />
                            ) : (
                              <IconifyIcon icon="mingcute:down-fill" width={1} height={1} />
                            ))}
                        </ListItemIcon>
                      </ListItemButton>
                      <Collapse in={nestedChecked[idx]}>
                        <List>
                          {subListItem?.sublist?.map(
                            (nestedSubListItem: any, nestedIdx: number) => (
                              <ListItem key={nestedIdx}>
                                <ListItemButton
                                  LinkComponent={Link}
                                  href={
                                    // navItem.path !== '/'
                                    //   ? navItem.path +
                                    //     '/' +
                                    //     subListItem.path +
                                    //     '/' +
                                    //     nestedSubListItem.path
                                    //   : nestedSubListItem.path
                                    '#!'
                                  }
                                >
                                  <ListItemText sx={(theme) => ({ ml: theme.spacing(5) })}>
                                    {nestedSubListItem.title}
                                  </ListItemText>
                                </ListItemButton>
                              </ListItem>
                            ),
                          )}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <ListItemButton
                      LinkComponent={Link}
                      href={
                        navItem.path === 'authentication'
                          ? navItem.path + '/' + subListItem.path
                          : navItem.path === '/'
                          ? navItem.path
                          : '#!'
                      }
                    >
                      <ListItemText sx={(theme) => ({ ml: theme.spacing(3) })}>
                        {subListItem.title}
                      </ListItemText>
                    </ListItemButton>
                  )}
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton
          LinkComponent={Link}
          // href={navItem.path}
          href={'#!'}
        >
          <ListItemIcon>
            <IconifyIcon icon={navItem.icon} width={1} height={1} />
          </ListItemIcon>
          <ListItemText>{navItem.title}</ListItemText>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default CollapsibleNavButton;
