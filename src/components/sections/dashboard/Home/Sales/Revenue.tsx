import { ReactElement, useRef } from 'react';
import { Box } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChart from './RevenueChart';

const Revenue = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

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
      <RevenueChart chartRef={chartRef} sx={{ minHeight: 1 }} />
      {/* <ReactEchart option={getOptions()} ref={chartRef} echarts={echarts} sx={{ minHeight: 1 }} /> */}
    </Box>
  );
};

export default Revenue;
