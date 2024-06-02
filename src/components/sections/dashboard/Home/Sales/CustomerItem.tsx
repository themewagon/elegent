import { Avatar, Box, IconButton, Link, ListItem, Stack, Tooltip, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';

type CustomerItemProps = {
  name: string;
  country: string;
  avatar: string;
};

const CustomerItem = ({ name, country, avatar }: CustomerItemProps): ReactElement => {
  return (
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
          <Avatar src={avatar} />
        </Tooltip>
        <Box component="div">
          <Typography variant="body1" color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country}
          </Typography>
        </Box>
      </Stack>
      <IconButton sx={(theme) => ({ padding: theme.spacing(1.75, 1.5) })}>
        <IconifyIcon icon="mingcute:mail-fill" color="primary.main" />
      </IconButton>
    </ListItem>
  );
};

export default CustomerItem;
