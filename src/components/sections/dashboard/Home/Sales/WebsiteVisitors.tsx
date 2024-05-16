import { ReactElement } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';

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
        borderColor: '#FFF',
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
          fontSize: 30,
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
const WebsiteVisitors = (): ReactElement => {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        height: 'min-content',
      })}
    >
      <Typography
        variant="subtitle1"
        color={(theme) => theme.palette.text.primary}
        p={(theme) => theme.spacing(2.5)}
      >
        Website Visitors
      </Typography>
      <Box
        sx={(theme) => ({
          maxWidth: theme.spacing(27.75),
          maxHeight: theme.spacing(27.75),
          mx: 'auto',
        })}
      >
        <EChartsReact option={options} style={{ height: '222px' }} />
      </Box>
      <Stack spacing={1} divider={<Divider />} sx={{ p: 2.5 }}>
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
            Direct
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.primary}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            43%
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
            Organic
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.primary}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            27%
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
          <Box
            sx={(theme) => ({
              width: theme.spacing(1.25),
              height: theme.spacing(1.25),
              backgroundColor: theme.palette.info.main,
              borderRadius: theme.shape.borderRadius * 100,
            })}
          ></Box>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.secondary}
            sx={{ flex: 1 }}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            Paid
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.primary}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            16%
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
            Social
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.text.primary}
            fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
          >
            33%
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WebsiteVisitors;