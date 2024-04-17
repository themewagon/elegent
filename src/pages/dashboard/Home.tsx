import { Grid, Stack } from "@mui/material"

import SaleInfo from "components/sections/dashboard/Home/SaleInfo"
import Revenue from "components/sections/dashboard/Home/Revenue";
import WebsiteVisitors from "components/sections/dashboard/Home/WebsiteVisitors";

import avgRevenue from "assets/sale-info/avg-revenue.png";
import sales from "assets/sale-info/sales.png";
import customers from "assets/sale-info/customers.png";
import TopSellingProduct from "components/sections/dashboard/Home/TopSellingProduct";
import BuyersProfile from "components/sections/dashboard/Home/BuyersProfile";
import NewCustomers from "components/sections/dashboard/Home/NewCustomers";

const Home = () => {
    return (
        <>
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <SaleInfo image={sales} title="Sales" subtitle="230,220" sales={55} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <SaleInfo image={customers} title="Customers" subtitle="3,200" sales={12} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
            <SaleInfo image={avgRevenue} title="Avg Revenue" subtitle="2,300" sales={210} />
        </Grid>
        <Grid item xs={12} sm={8}>
            <Revenue />
        </Grid>
        <Grid item xs={12} sm={4}>
            <WebsiteVisitors />
        </Grid>
        <Grid item xs={12} sm={8}>
            <TopSellingProduct />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Stack direction="column" gap="30px">
                <NewCustomers />
                <BuyersProfile />
            </Stack>
        </Grid>
        </>
    )
}

export default Home