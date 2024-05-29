import { ReactElement, useCallback } from 'react';
import { Box } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts';
import { useChartData } from 'data/chart-data';

const Revenue = (): ReactElement => {
  const { revenueLineChartOptions } = useChartData();

  const getOptions = useCallback(() => revenueLineChartOptions(), []);
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
      <ReactEchart option={getOptions()} echarts={echarts} sx={{ minHeight: 1 }} />
    </Box>
  );
};

export default Revenue;
