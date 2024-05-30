import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import BuyersProfileChart from './BuyersProfileChart';
import { PieDataItemOption } from 'echarts/types/src/chart/pie/PieSeries.js';

const BuyersProfile = (): ReactElement => {
  const theme = useTheme();
  const seriesData: PieDataItemOption[] = [
    { value: 50, name: 'Male' },
    { value: 35, name: 'Female' },
    { value: 15, name: 'Others' },
  ];
  const legendData = [
    { name: 'Male', icon: 'circle' },
    { name: 'Female', icon: 'circle' },
    { name: 'Others', icon: 'circle' },
  ];
  const pieChartColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.error.main,
  ];

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
      console.log(instance.getOption());
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
      <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2.5}>
        <Typography variant="subtitle1" color="text.primary">
          Buyers Profile
        </Typography>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            bgcolor: open ? 'action.active' : 'transparent',
            padding: 1,
            width: 36,
            height: 36,
            ':hover': {
              bgcolor: 'action.active',
            },
          }}
        >
          <IconifyIcon icon="ph:dots-three-outline-fill" color="text.secondary" />
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
              Edit
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1" component="p" color="error.main">
              Delete
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
        <BuyersProfileChart
          chartRef={chartRef}
          seriesData={seriesData}
          legendData={legendData}
          colors={pieChartColors}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 0%',
            width: 0.5,
            maxWidth: 177,
            maxHeight: 177,
          }}
        />
        <Stack
          spacing={2}
          sx={{
            width: 0.5,
          }}
        >
          {Array.isArray(seriesData) &&
            seriesData.map((dataItem, index) => (
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
                  bgcolor: clicked[`${dataItem.name}`] ? 'action.focus' : 'background.paper',
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
                      backgroundColor: clicked[`${dataItem.name}`]
                        ? 'action.disabled'
                        : pieChartColors[index],
                      borderRadius: theme.shape.borderRadius * 100,
                    })}
                  ></Box>
                  <Typography variant="body1" color="text.secondary" textAlign="left" flex={1}>
                    {dataItem.name}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
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
