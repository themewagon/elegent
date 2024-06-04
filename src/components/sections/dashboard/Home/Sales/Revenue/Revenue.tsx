import { ReactElement, useRef } from 'react';
import { Box } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import RevenueChart from './RevenueChart';

const Revenue = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Box
      sx={{
        bgcolor: 'common.white',
        borderRadius: 5,
        minHeight: 460,
        // width: 1,
        height: 1,
        mx: 'auto',
      }}
    >
      <RevenueChart chartRef={chartRef} sx={{ minHeight: 1 }} />
    </Box>
  );
};

export default Revenue;
