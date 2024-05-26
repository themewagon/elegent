import { ReactElement, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Link,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import leatrice from 'assets/new-customers/leatrice.png';
import roselle from 'assets/new-customers/roselle.jpg';
import darron from 'assets/new-customers/darron.png';
import jone from 'assets/new-customers/jone.png';

import IconifyIcon from 'components/base/IconifyIcon';

const NewCustomers = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        height: 1,
        flex: '1 1 auto',
      })}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={(theme) => theme.spacing(2.5)}
      >
        <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary}>
          New Customers
        </Typography>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={(theme) => ({
            bgcolor: 'transparent',
            padding: 0,
            width: theme.spacing(3),
            height: theme.spacing(3),
          })}
        >
          <IconifyIcon
            icon="ph:dots-three-outline-fill"
            color={(theme) => theme.palette.text.secondary}
          />
        </IconButton>
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
            <Typography variant="body1" component="p">
              Last Week
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p">
              Last Month
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p">
              Last Year
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
      <Stack pb={(theme) => theme.spacing(1.25)}>
        <ListItem
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          })}
        >
          <Stack direction="row" gap={1.5} component={Link}>
            <Tooltip title="Roselle" placement="top" arrow enterDelay={0} leaveDelay={0}>
              <Avatar src={roselle} />
            </Tooltip>
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Roselle Ehrman
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Brazil
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          })}
        >
          <Stack direction="row" gap={1.5} component={Link}>
            <Tooltip title="Jone" placement="top" arrow enterDelay={0} leaveDelay={0}>
              <Avatar src={jone} />
            </Tooltip>
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Jone Smith
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Australia
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          })}
        >
          <Stack direction="row" gap={1.5} component={Link}>
            <Tooltip title="Darron" placement="top" arrow enterDelay={0} leaveDelay={0}>
              <Avatar src={darron} />
            </Tooltip>
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Darron Handler
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Pakistan
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          })}
        >
          <Stack direction="row" gap={1.5} component={Link}>
            <Tooltip title="Leatrice" placement="top" arrow enterDelay={0} leaveDelay={0}>
              <Avatar src={leatrice} />
            </Tooltip>
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Leatrice Kulik
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Mascow
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        {/* <ListItem
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          })}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={leatrice} />
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Leatrice Kulik
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              >
                Mascow
              </Typography>
            </Box>
          </Stack>
          <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem> */}
      </Stack>
    </Box>
  );
};

export default NewCustomers;
