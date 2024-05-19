import { ReactElement } from 'react';
import { Avatar, Box, IconButton, ListItem, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import roselle from 'assets/new-customers/roselle.jpg';
import jone from 'assets/new-customers/jone.png';

const Conversations = (): ReactElement => {
  return (
    <Stack
      padding={(theme) => theme.spacing(2.5, 3.375, 2, 2.5)}
      bgcolor={(theme) => theme.palette.background.paper}
      borderRadius={(theme) => theme.shape.borderRadius * 1.25}
      gap={2.625}
      height={1}
    >
      <Typography variant="subtitle1">Conversations</Typography>
      <Stack gap={2.5}>
        <ListItem
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={roselle} />
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
                Hi! I need more info
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Stack direction="row" gap={1.5}>
            <Avatar src={jone} />
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
                About files I Can
              </Typography>
            </Box>
          </Stack>
          <IconButton>
            <IconifyIcon icon="mingcute:mail-fill" color={(theme) => theme.palette.primary.main} />
          </IconButton>
        </ListItem>
      </Stack>
    </Stack>
  );
};

export default Conversations;
