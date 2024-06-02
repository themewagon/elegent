import { ReactElement } from 'react';
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

import profile from 'assets/profile/profile.jpg';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const UserInfo = (): ReactElement => {
  const { down } = useBreakpoints();

  return (
    <Stack
      direction={{ md: 'row' }}
      divider={
        <Divider orientation={down('md') ? 'horizontal' : 'vertical'} variant="middle" flexItem />
      }
      padding={3.75}
      bgcolor="background.paper"
      borderRadius={5}
      gap={3.75}
    >
      <Stack gap={3.75} flex={1}>
        <Stack
          direction={{ xs: 'row', md: 'column', lg: 'row' }}
          gap={3.75}
          alignItems={{ xs: 'center', md: 'flex-start', lg: 'center' }}
        >
          <Box maxWidth={100} height={100} borderRadius={9999}>
            <Image
              src={profile}
              alt="Aiden Max"
              width={1}
              height={1}
              sx={{ objectFit: 'cover', borderRadius: 9999 }}
            />
          </Box>
          <Stack gap={0.625}>
            <Typography variant="h4" color="text.primary">
              Aiden Max
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              CEO / Co-Founder
            </Typography>
          </Stack>
        </Stack>
        <Typography
          variant="body1"
          color={(theme) => theme.palette.text.secondary}
          maxWidth={(theme) => theme.spacing(47.5)}
        >
          Hi, I'm Aiden Max: If you can't decide, the answer is no. If two equally difficult paths,
          choose the one more painful in the short term (pain avoidance is creating an illusion of
          equality).
        </Typography>
      </Stack>
      <Stack gap={3.75} flex={1}>
        <Stack direction="row" gap={6.25}>
          <Stack gap={3.75}>
            <Typography variant="body1" color="text.primary">
              Email:
            </Typography>
            <Typography variant="body1" color="text.primary">
              Mobile:
            </Typography>
            <Typography variant="body1" color="text.primary">
              Age:
            </Typography>
            <Typography variant="body1" color="text.primary">
              Location:
            </Typography>
            <Typography variant="body1" color="text.primary">
              Social:
            </Typography>
          </Stack>
          <Stack gap={3.75}>
            <Typography variant="body1" color="text.secondary">
              aidenmax451@gmail.com
            </Typography>
            <Typography variant="body1" color="text.secondary">
              (44) 123 1234 123
            </Typography>
            <Typography variant="body1" color="text.secondary">
              27
            </Typography>
            <Typography variant="body1" color="text.secondary">
              USA
            </Typography>
            <Stack direction="row" gap={1.875}>
              <IconButton
                sx={{
                  width: 24,
                  height: 24,
                  padding: 0,
                  backgroundColor: 'common.white',
                  ':hover': {
                    backgroundColor: 'common.white',
                  },
                }}
              >
                <IconifyIcon icon="mdi:facebook" width={1} height={1} color="primary.main" />
              </IconButton>
              <IconButton
                sx={{
                  width: 24,
                  height: 24,
                  padding: 0,
                  backgroundColor: 'common.white',
                  ':hover': {
                    backgroundColor: 'common.white',
                  },
                }}
              >
                <IconifyIcon icon="mdi:instagram" width={1} height={1} color="primary.main" />
              </IconButton>
              <IconButton
                sx={{
                  width: 24,
                  height: 24,
                  padding: 0,
                  backgroundColor: 'common.white',
                  ':hover': {
                    backgroundColor: 'common.white',
                  },
                }}
              >
                <IconifyIcon icon="mdi:twitter" width={1} height={1} color="primary.main" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Button variant="contained" size="small" sx={{ width: 'fit-content', alignSelf: 'end' }}>
          Edit Info
        </Button>
      </Stack>
    </Stack>
  );
};

export default UserInfo;
