import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { EChartOption } from 'data/chart-data';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { useBreakpoints } from 'providers/BreakpointsProvider';
// import { useMemo } from 'react';

type RevenueChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
};

const RevenueChart = ({ chartRef, ...rest }: RevenueChartProps) => {
  const { up } = useBreakpoints();
  const theme = useTheme();

  // const chartOption = useMemo(() => {
  //   return option;
  // }, [theme]);
  const option: EChartOption = {
    title: {
      text: 'Revenue',
      textStyle: {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        color: theme.palette.text.primary,
        fontFamily: theme.typography.h5.fontFamily,
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
          color: theme.palette.divider,
          width: 1,
          type: 'dashed',
        },
      },
      axisLabel: {
        show: true,
        padding: 30,
        color: theme.palette.text.secondary,
        formatter: (value: any) => value.slice(0, 3),
        fontFamily: theme.typography.body1.fontFamily,
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
        color: theme.palette.text.secondary,
        align: 'center',
        padding: [0, 20, 0, 0],
        fontFamily: theme.typography.body1.fontFamily,
      },
      splitLine: {
        interval: 5,
        lineStyle: {
          color: theme.palette.divider,
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
        color: theme.palette.text.secondary,
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
        id: 1,
        data: [65, 210, 175, 140, 105, 20, 120, 20],
        type: 'line',
        smooth: true,
        color: theme.palette.secondary.main,
        name: 'Google ads',
        legendHoverLink: true,
        showSymbol: true,
        symbolSize: 12,
        lineStyle: {
          width: 5,
        },
      },
      {
        id: 2,
        data: [20, 125, 100, 30, 150, 300, 90, 180],
        type: 'line',
        smooth: true,
        color: theme.palette.primary.main,
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

  return <ReactEchart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default RevenueChart;
