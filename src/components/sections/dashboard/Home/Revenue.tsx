import { Box } from '@mui/material';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import { theme } from 'theme/theme';

const option: EChartsOption = {
  title: {
    text: 'Revenue',
    textStyle: {
      // fontFamily: 'Poppins',
      fontSize: '20.25px',
      fontWeight: 500,
      color: '#050F24',
    },
    top: 30,
    left: 30,
  },
  xAxis: {
    type: 'category',
    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    boundaryGap: false,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#E1E1E1',
        width: 1,
        type: 'dashed',
      },
    },
    axisLabel: {
      show: true,
      padding: 30,
      color: '#6F757E',
      formatter: (value) => value.slice(0, 3),
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    max: 400,
    splitNumber: 4,
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      color: '#6F757E',
      align: 'center',
      padding: [0, 20, 0, 0],
    },
    splitLine: {
      interval: 5,
      lineStyle: {
        color: '#E1E1E1',
        width: 1,
        type: 'dashed',
      },
    },
  },
  grid: {
    left: 65,
    right: 32,
    top: 123,
    bottom: 87,
  },
  legend: {
    show: true,
    top: 30,
    right: 30,
    orient: 'horizontal',
    icon: 'pin',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    // backgroundColor: '#050F24',
  },
  series: [
    {
      data: [65, 210, 175, 140, 105, 20, 120, 20],
      type: 'line',
      smooth: true,
      color: '#27D095',
      name: 'Google ads',
      legendHoverLink: true,
      symbolSize: 12,
      lineStyle: {
        width: 5,
      },
    },
    {
      data: [20, 125, 100, 30, 150, 300, 90, 180],
      type: 'line',
      smooth: true,
      color: '#FF8E29',
      name: 'Facebook ads',
      legendHoverLink: true,
      symbolSize: 12,
      lineStyle: {
        width: 5,
      },
    },
  ],
};

const Revenue = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        width: 1,
        height: { xs: '460px', md: 1 },
      }}
    >
      <EChartsReact option={option} style={{ height: '100%' }} />
    </Box>
  );
};

export default Revenue;
