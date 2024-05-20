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
      padding={(theme) => theme.spacing(3.75)}
      bgcolor={(theme) => theme.palette.background.paper}
      borderRadius={(theme) => theme.shape.borderRadius * 1.25}
      gap={3.75}
    >
      <Stack gap={3.75} flex={1}>
        <Stack
          direction={{ xs: 'row', md: 'column', lg: 'row' }}
          gap={3.75}
          alignItems={{ xs: 'center', md: 'flex-start', lg: 'center' }}
        >
          <Box
            maxWidth={(theme) => theme.spacing(12.5)}
            height={(theme) => theme.spacing(12.5)}
            borderRadius={9999}
          >
            <Image
              src={profile}
              alt="Aiden Max"
              width={1}
              height={1}
              sx={{ objectFit: 'cover', borderRadius: 9999 }}
            />
          </Box>
          <Stack gap={0.625}>
            <Typography variant="h4" color={(theme) => theme.palette.text.primary}>
              Aiden Max
            </Typography>
            <Typography variant="subtitle1" color={(theme) => theme.palette.text.secondary}>
              CEO / Co-Founder
            </Typography>
          </Stack>
        </Stack>
        <Typography
          variant="body1"
          color={(theme) => theme.palette.text.secondary}
          maxWidth={(theme) => theme.spacing(47.5)}
          fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
        >
          Hi, I'm Aiden Max: If you can't decide, the answer is no. If two equally difficult paths,
          choose the one more painful in the short term (pain avoidance is creating an illusion of
          equality).
        </Typography>
      </Stack>
      <Stack gap={3.75} flex={1}>
        <Stack direction="row" gap={6.25}>
          <Stack gap={3.75}>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Email:
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Mobile:
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Age:
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Location:
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Social:
            </Typography>
          </Stack>
          <Stack gap={3.75}>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              aidenmax451@gmail.com
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              (44) 123 1234 123
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              27
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              USA
            </Typography>
            <Stack direction="row" gap={1.875}>
              <IconButton
                sx={(theme) => ({
                  width: theme.spacing(3),
                  height: theme.spacing(3),
                  padding: 0,
                  backgroundColor: theme.palette.common.white,
                  ':hover': {
                    backgroundColor: theme.palette.common.white,
                  },
                })}
              >
                <IconifyIcon
                  icon="mdi:facebook"
                  width={1}
                  height={1}
                  color={(theme) => theme.palette.primary.main}
                />
              </IconButton>
              <IconButton
                sx={(theme) => ({
                  width: theme.spacing(3),
                  height: theme.spacing(3),
                  padding: 0,
                  backgroundColor: theme.palette.common.white,
                  ':hover': {
                    backgroundColor: theme.palette.common.white,
                  },
                })}
              >
                <IconifyIcon
                  icon="mdi:instagram"
                  width={1}
                  height={1}
                  color={(theme) => theme.palette.primary.main}
                />
              </IconButton>
              <IconButton
                sx={(theme) => ({
                  width: theme.spacing(3),
                  height: theme.spacing(3),
                  padding: 0,
                  backgroundColor: theme.palette.common.white,
                  ':hover': {
                    backgroundColor: theme.palette.common.white,
                  },
                })}
              >
                <IconifyIcon
                  icon="mdi:twitter"
                  width={1}
                  height={1}
                  color={(theme) => theme.palette.primary.main}
                />
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
