import { ReactElement, useCallback, useRef } from 'react';
import { Box } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts';
import { useChartData } from 'data/chart-data';
import EChartsReactCore from 'echarts-for-react/lib/core';

const Revenue = (): ReactElement => {
  const { revenueLineChartOptions } = useChartData();

  const chartRef = useRef<EChartsReactCore | null>(null);
  const getOptions = useCallback(() => revenueLineChartOptions(), []);

  // chartRef.current?.getEchartsInstance().on('mouseover', { seriesIndex: 2 }, () => {
  //   console.log(chartRef.current?.getEchartsInstance().getHeight());
  // });
  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        minHeight: 460,
        // width: 1,
        height: 1,
        mx: 'auto',
      })}
    >
      <ReactEchart option={getOptions()} ref={chartRef} echarts={echarts} sx={{ minHeight: 1 }} />
    </Box>
  );
};

export default Revenue;
