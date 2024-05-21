import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const Revenue = (): ReactElement => {
  const { up } = useBreakpoints();
  const option: EChartsOption = {
    title: {
      text: 'Revenue',
      textStyle: {
        fontSize: '20.25px',
        fontWeight: 500,
        color: '#050F24',
        fontFamily: 'IBM Plex Sans',
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
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
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
      top: up('sm') ? 30 : 70,
      right: up('sm') ? 30 : 'auto',
      left: up('sm') ? 'auto' : 30,
      orient: 'horizontal',
      icon: 'pin',
      textStyle: {
        fontFamily: 'Poppins',
        fontSize: '0.75rem',
        fontWeight: 400,
        color: '#6F757E',
      },
      itemGap: 20,
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      valueFormatter: (value: any) => '$' + value.toFixed(0),
    },
    series: [
      {
        data: [65, 210, 175, 140, 105, 20, 120, 20],
        type: 'line',
        smooth: true,
        color: '#27D095',
        name: 'Google ads',
        legendHoverLink: true,
        showSymbol: true,
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
        showSymbol: false,
        symbolSize: 12,
        lineStyle: {
          width: 5,
        },
      },
    ],
  };
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        minHeight: theme.spacing(57.5),
        // width: 1,
        height: 1,
        mx: 'auto',
      })}
    >
      <EChartsReact
        option={option}
        ref={(e) => e?.render()}
        style={{ height: '100%' }}
        opts={{
          width: 'auto',
          renderer: 'canvas',
        }}
        lazyUpdate
      />
    </Box>
  );
};

export default Revenue;
