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
        borderRadius: theme.spacing(2.5),
        marginTop: { xs: '70px', sm: 0 },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" padding="20px">
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
      <Stack
        direction="column"
        sx={{
          // padding: '0 20px',
          pb: '10px',
        }}
      >
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <Avatar src={roselle} />
            <Box component="div">
              <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
                Roselle Ehrman
              </Typography>
              <Typography variant="body2" color={(theme) => theme.palette.text.secondary}>
                Brazil
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color="#FF8E29" />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Avatar src={jone} />
            <Box component="div">
              <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
                Jone Smith
              </Typography>
              <Typography variant="body2" color={(theme) => theme.palette.text.secondary}>
                Australia
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color="#FF8E29" />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Avatar src={darron} />
            <Box component="div">
              <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
                Darron Handler
              </Typography>
              <Typography variant="body2" color={(theme) => theme.palette.text.secondary}>
                Pakistan
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color="#FF8E29" />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Avatar src={leatrice} />
            <Box component="div">
              <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
                Leatrice Kulik
              </Typography>
              <Typography variant="body2" color={(theme) => theme.palette.text.secondary}>
                Mascow
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
      </Stack>
    </Box>
  );
};

export default NewCustomers;
