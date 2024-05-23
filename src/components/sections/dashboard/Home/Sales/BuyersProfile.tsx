import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import EChartsReact from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { ReactElement, useRef, useState } from 'react';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';

const option: EChartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%',
  },
  legend: {
    show: false,
    data: [
      { name: 'Male', icon: 'circle' },
      { name: 'Female', icon: 'circle' },
      { name: 'Others', icon: 'circle' },
    ],
  },
  series: [
    {
      name: 'Buyers Profile',
      type: 'pie',
      radius: ['65%', '90%'],
      color: Array.from(['#FF8E29', '#27D095', '#F54F5F']),
      avoidLabelOverlap: true,
      startAngle: -30,
      clockwise: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: false,
        },
        scaleSize: 0,
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 50, name: 'Male' },
        { value: 35, name: 'Female' },
        { value: 15, name: 'Others' },
      ],
    },
  ],
};
const BuyersProfile = (): ReactElement => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [clicked, setClicked] = useState<any>({
    Male: false,
    Female: false,
    Others: false,
  });

  const toggleClicked = (name: string) => {
    setClicked((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChartLegendSelectChanged = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  return (
    <Stack
      sx={(theme) => ({
        bgcolor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 1.25,
        height: 1,
        flex: '1 1 auto',
      })}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={(theme) => theme.spacing(2.5)}
      >
        <Typography variant="subtitle1" color={(theme) => theme.palette.text.primary}>
          Buyers Profile
        </Typography>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={(theme) => ({
            bgcolor: 'transparent',
            padding: 0,
            width: theme.spacing(3),
            height: theme.spacing(3),
          })}
        >
          <IconifyIcon
            icon="ph:dots-three-outline-fill"
            color={(theme) => theme.palette.text.secondary}
          />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p">
              Item 1
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p">
              Item 2
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p">
              Item 3
            </Typography>
          </MenuItem>
        </Menu>
      </Stack>
      <Stack
        // direction={{ xs: 'row', md: 'column', lg: 'row' }}
        direction={'row'}
        alignItems="center"
        flex={1}
        gap={2}
        padding={(theme) => theme.spacing(0, 2.5, 2.5)}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            width: 0.5,
            maxWidth: theme.spacing(22.125),
            maxHeight: theme.spacing(22.125),
          })}
        >
          <EChartsReact
            echarts={echarts}
            ref={chartRef}
            option={option}
            style={{ width: '100%', height: '177px' }}
            lazyUpdate
          />
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: 0.5,
          }}
        >
          {Array.isArray(option.series) &&
            Array.isArray(option.series[0].data) &&
            option.series[0].data.map((dataItem, index) => (
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
                    bgcolor: 'action.hover',
                  },
                }}
                disableRipple
              >
                <Stack direction="row" alignItems="center" gap={1} width={1}>
                  <Box
                    sx={(theme) => ({
                      width: theme.spacing(1.25),
                      height: theme.spacing(1.25),
                      backgroundColor: option.series[0].color[index],
                      borderRadius: theme.shape.borderRadius * 100,
                    })}
                  ></Box>
                  <Typography
                    variant="body1"
                    color={(theme) => theme.palette.text.secondary}
                    textAlign={'left'}
                    flex={1}
                    fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
                  >
                    {dataItem.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={(theme) => theme.palette.text.primary}
                    fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
                  >
                    {dataItem.value}%
                  </Typography>
                </Stack>
              </Button>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BuyersProfile;
