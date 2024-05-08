import { Avatar, Box, IconButton, ListItem, Stack, Typography } from '@mui/material';
import leatrice from 'assets/new-customers/leatrice.png';
import roselle from 'assets/new-customers/roselle.jpg';
import darron from 'assets/new-customers/darron.png';
import jone from 'assets/new-customers/jone.png';

import IconifyIcon from 'components/base/IconifyIcon';
import { theme } from 'theme/theme';

const NewCustomers = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        mt: { xs: theme.spacing(8.75), md: 0 },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={theme.spacing(2.5)}
      >
        <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary}>
          New Customers
        </Typography>
        <IconButton>
          <IconifyIcon
            icon="ph:dots-three-outline-fill"
            color={(theme) => theme.palette.text.secondary}
          />
        </IconButton>
      </Stack>
      <Stack pb={theme.spacing(1.25)}>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={roselle} />
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Roselle Ehrman
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Brazil
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={jone} />
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Jone Smith
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Australia
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={darron} />
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Darron Handler
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Pakistan
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1.25, 2.5),
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={leatrice} />
            <Box component="div">
              <Typography
                variant="body1"
                color={(theme) => theme.palette.text.primary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Leatrice Kulik
              </Typography>
              <Typography
                variant="body2"
                color={(theme) => theme.palette.text.secondary}
                fontFamily={theme.typography.fontFamily?.split(',')[1]}
              >
                Mascow
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
      </Stack>
    </Box>
  );
};

export default NewCustomers;
