import { Box, IconButton, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import EChartsReact from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { ReactElement } from 'react';

const option: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Buyers Profile',
      type: 'pie',
      radius: ['65%', '90%'],
      color: ['#FF8E29', '#27D095', '#F54F5F'],
      avoidLabelOverlap: true,
      startAngle: -30,
      clockwise: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: false,
        },
        scaleSize: 0,
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 50, name: 'Male' },
        { value: 35, name: 'Female' },
        { value: 15, name: 'Others' },
      ],
    },
  ],
};
const BuyersProfile = (): ReactElement => {
  return (
    <Stack
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
          Buyers Profile
        </Typography>
        <IconButton
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
      </Stack>
      <Stack
        // direction={{ xs: 'row', md: 'column', lg: 'row' }}
        direction={'row'}
        alignItems="center"
        flex={1}
        gap={2}
        padding={(theme) => theme.spacing(0, 2.5, 2.5)}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            width: 0.5,
            maxWidth: theme.spacing(22.125),
            maxHeight: theme.spacing(22.125),
          })}
        >
          <EChartsReact option={option} style={{ width: '100%', height: '177px' }} lazyUpdate />
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: 0.5,
            // flex: 1,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
            <Box
              sx={(theme) => ({
                width: theme.spacing(1.25),
                height: theme.spacing(1.25),
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius * 100,
              })}
            ></Box>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ flex: 1 }}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Male
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              50%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
            <Box
              sx={(theme) => ({
                width: theme.spacing(1.25),
                height: theme.spacing(1.25),
                backgroundColor: theme.palette.secondary.main,
                borderRadius: theme.shape.borderRadius * 100,
              })}
            ></Box>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ flex: 1 }}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Female
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              35%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
            <Box
              sx={(theme) => ({
                width: theme.spacing(1.25),
                height: theme.spacing(1.25),
                backgroundColor: theme.palette.error.main,
                borderRadius: theme.shape.borderRadius * 100,
              })}
            ></Box>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ flex: 1 }}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              Others
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              15%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BuyersProfile;
