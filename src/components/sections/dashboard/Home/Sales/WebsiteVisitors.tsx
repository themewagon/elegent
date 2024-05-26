import { ReactElement, useMemo, useRef, useState } from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { EChartsOption, SeriesOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { PieDataItemOption } from 'echarts/types/src/chart/pie/PieSeries.js';

const pieChartOptions: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    data: [
      { name: 'Direct', icon: 'circle' },
      { name: 'Organic', icon: 'circle' },
      { name: 'Paid', icon: 'circle' },
      { name: 'Social', icon: 'circle' },
    ],
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
        { value: 6840, name: 'Direct' },
        { value: 3960, name: 'Organic' },
        { value: 2160, name: 'Paid' },
        { value: 5040, name: 'Social' },
      ],
    },
  ],
};

const pieChartSeries = pieChartOptions.series as SeriesOption[];
const pieChartData = pieChartSeries[0].data as PieDataItemOption[];
const pieChartColors = pieChartSeries[0].color as string[];

const WebsiteVisitors = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const onChartLegendSelectChanged = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };
  const [clicked, setClicked] = useState<any>({
    Direct: false,
    Organic: false,
    Paid: false,
    Social: false,
  });

  const toggleClicked = (name: string) => {
    setClicked((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const totalVisitors = useMemo(
    () => pieChartData.reduce((acc: number, next: any) => acc + next.value, 0),
    [],
  );

  return (
    <Box
      sx={(theme) => ({
        bgcolor: 'common.white',
        borderRadius: theme.shape.borderRadius * 1.25,
        height: 'min-content',
      })}
    >
      <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary} p={2.5}>
        Website Visitors
      </Typography>
      <Box
        sx={(theme) => ({
          maxWidth: theme.spacing(27.75),
          maxHeight: theme.spacing(27.75),
          mx: 'auto',
        })}
      >
        <EChartsReact
          echarts={echarts}
          ref={chartRef}
          option={pieChartOptions}
          style={{ height: '222px' }}
        />
      </Box>
      <Stack spacing={1} divider={<Divider />} sx={{ p: 2.5 }}>
        {Array.isArray(pieChartSeries) &&
          Array.isArray(pieChartSeries[0].data) &&
          pieChartSeries[0].data.map((dataItem, index) => (
            <Button
              key={dataItem.name}
              variant="text"
              fullWidth
              onClick={() => {
                toggleClicked(dataItem.name as string);
                onChartLegendSelectChanged(dataItem.name as string);
              }}
              sx={{
                justifyContent: 'flex-start',
                padding: 0,
                px: 1,
                borderRadius: 1,
                bgcolor: clicked[dataItem.name] ? 'action.focus' : 'background.paper',
                ':hover': {
                  bgcolor: 'action.active',
                },
              }}
              disableRipple
            >
              <Stack direction="row" alignItems="center" gap={1} width={1}>
                <Box
                  sx={(theme) => ({
                    width: theme.spacing(1.25),
                    height: theme.spacing(1.25),
                    backgroundColor: clicked[dataItem.name]
                      ? 'action.disabled'
                      : pieChartColors[index],
                    borderRadius: theme.shape.borderRadius * 100,
                  })}
                ></Box>
                <Typography variant="body1" color="text.secondary" flex={1} textAlign={'left'}>
                  {dataItem.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {((dataItem.value / totalVisitors) * 100).toFixed(0)}%
                </Typography>
              </Stack>
            </Button>
          ))}
      </Stack>
    </Box>
  );
};

export default WebsiteVisitors;
