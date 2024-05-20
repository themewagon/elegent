import { ReactElement } from 'react';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import TopSellingProduct from 'components/sections/dashboard/Home/Sales/TopSellingProduct';
import WebsiteVisitors from 'components/sections/dashboard/Home/Sales/WebsiteVisitors';
import BuyersProfile from 'components/sections/dashboard/Home/Sales/BuyersProfile';
import NewCustomers from 'components/sections/dashboard/Home/Sales/NewCustomers';
import SaleInfo from 'components/sections/dashboard/Home/Sales/SaleInfo';
import Revenue from 'components/sections/dashboard/Home/Sales/Revenue';

import avgRevenue from 'assets/sale-info/avg-revenue.png';
import customers from 'assets/sale-info/customers.png';
import sales from 'assets/sale-info/sales.png';
import { drawerWidth } from 'layouts/main-layout';

const Sales = (): ReactElement => {
  return (
    <Grid
      container
      component="main"
      columns={12}
      spacing={3.75}
      flexGrow={1}
      pt={4.375}
      pr={1.875}
      pb={1.875}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        pl: { xs: 3.75, lg: 0 },
      }}
    >
      <Grid xs={12} sm={6} md={4}>
        <SaleInfo image={sales} title="Sales" subtitle="230,220" sales={55} date />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <SaleInfo image={customers} title="Customers" subtitle="3,200" sales={12} date />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <SaleInfo image={avgRevenue} title="Avg Revenue" subtitle="2,300" sales={210} date />
      </Grid>
      <Grid xs={12} md={8}>
        <Revenue />
      </Grid>
      <Grid xs={12} md={4}>
        <WebsiteVisitors />
      </Grid>
      <Grid xs={12} lg={8} minHeight={(theme) => theme.spacing(77.75)}>
        <TopSellingProduct />
      </Grid>
      <Grid xs={12} lg={4}>
        <Stack
          direction={{ xs: 'column', sm: 'row', lg: 'column' }}
          gap={(theme) => theme.spacing(3.75)}
          height={1}
          width={1}
        >
          <NewCustomers />
          <BuyersProfile />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Sales;
