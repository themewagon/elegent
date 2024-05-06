import { Box, IconButton, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import EChartsReact from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { theme } from 'theme/theme';

const option: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Buyers Profile',
      type: 'pie',
      radius: ['75%', '95%'],
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
const BuyersProfile = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" padding="20px">
        <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary}>
          Buyers Profile
        </Typography>
        <IconButton>
          <IconifyIcon icon="ph:dots-three-outline-fill" color="#6F757E" />
        </IconButton>
      </Stack>
      <Stack
        direction={{ xs: 'row', sm: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        padding={theme.spacing(0, 2.5, 2.5)}
      >
        <Box
          sx={{
            width: 1,
            flex: 1,
          }}
        >
          <EChartsReact option={option} />
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: 1,
            flex: 1,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}
            >
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#FF8E29',
                  borderRadius: '50%',
                }}
              ></Box>{' '}
              Male
            </Typography>
            <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
              50%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}
            >
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#27D095',
                  borderRadius: '50%',
                }}
              ></Box>{' '}
              Female
            </Typography>
            <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
              35%
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.secondary}
              sx={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}
            >
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#F54F5F',
                  borderRadius: '50%',
                }}
              ></Box>{' '}
              Others
            </Typography>
            <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
              15%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BuyersProfile;
