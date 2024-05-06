import { Box, Divider, Stack, Typography } from '@mui/material';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import { theme } from 'theme/theme';

const options: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Website Visitors',
      type: 'pie',
      radius: ['65%', '80%'],
      avoidLabelOverlap: true,
      startAngle: 0,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      color: ['#FF8E29', '#27D095', '#67CADF', '#F54F5F'],
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
          formatter: `{b}`,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 7740, name: 'Direct' },
        { value: 4860, name: 'Organic' },
        { value: 2880, name: 'Paid' },
        { value: 5940, name: 'Social' },
      ],
    },
  ],
};
const WebsiteVisitors = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        height: 'min-content',
      }}
    >
      <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary} p="20px">
        Website Visitors
      </Typography>
      <EChartsReact option={options} />
      <Stack spacing={1} divider={<Divider />} sx={{ p: 2.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Box
            sx={{
              width: theme.spacing(1.25),
              height: theme.spacing(1.25),
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.secondary}
            sx={{ flex: 1 }}
          >
            Direct
          </Typography>
          <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
            43%
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Box
            sx={{
              width: theme.spacing(1.25),
              height: theme.spacing(1.25),
              backgroundColor: theme.palette.secondary.main,
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.secondary}
            sx={{ flex: 1 }}
          >
            Organic
          </Typography>
          <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
            27%
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Box
            sx={{
              width: theme.spacing(1.25),
              height: theme.spacing(1.25),
              backgroundColor: theme.palette.info.main,
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.secondary}
            sx={{ flex: 1 }}
          >
            Paid
          </Typography>
          <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
            16%
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Box
            sx={{
              width: theme.spacing(1.25),
              height: theme.spacing(1.25),
              backgroundColor: theme.palette.error.main,
              borderRadius: '50%',
            }}
          ></Box>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.secondary}
            sx={{ flex: 1 }}
          >
            Social
          </Typography>
          <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
            33%
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WebsiteVisitors;
