import { Avatar, Stack, Typography } from "@mui/material";

import nikeV22 from "assets/top-selling-products/nikeV22.jpg";
import instaxCamera from "assets/top-selling-products/instaxCamera.jpg";
import relaxingChair from "assets/top-selling-products/relaxingChair.jpg";
import laptop from "assets/top-selling-products/laptop.jpg";
import watch from "assets/top-selling-products/watch.jpg";


export const columns = [
    {
        field: "id",
        headerName: "ID",
        width: 70,
    },
    {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
            console.log(params);
            return (
                <Stack direction="row" spacing={1}>
                    <Avatar src={params.value.avatar} />
                    <Stack direction="column" spacing={0.5}>
                        <Typography variant="body1" color={theme => theme.palette.text.primary}>
                            {params.value.title}
                        </Typography>
                        <Typography variant="body2" color={theme => theme.palette.text.secondary}>
                            {params.value.subtitle}
                        </Typography>
                    </Stack>
                </Stack>
            );
        },
    },
    {
        field: "orders",
        headerName: "Orders",
        width: 130,
    },
    {
        field: "price",
        headerName: "Price",
        width: 90,
    },
    {
        field: "ads-spent",
        headerName: "Ads Spent",
        width: 100,
    },
    {
        field: "refunds",
        headerName: "Refunds",
        width: 100,
    },
];

export const rows = [
    {
        id: 1,
        product: {
            avatar: nikeV22,
            title: "Nike v22",
            subtitle: "Running Shoes",
        },
        orders: 8000,
        price: 130,
        "ads-spent": 9.5,
        refunds: 13,
    },
    {
        id: 2,
        product: {
            avatar: instaxCamera,
            title: "Instax Camera",
            subtitle: "Portable Camera",
        },
        orders: 3000,
        price: 45,
        "ads-spent": 4.5,
        refunds: 18,
    },
    {
        id: 3,
        product: {
            avatar: relaxingChair,
            title: "Chair ",
            subtitle: "Relaxing chair",
        },
        orders: 6000,
        price: 80,
        "ads-spent": 5.8,
        refunds: 11,
    },
    {
        id: 4,
        product: {
            avatar: laptop,
            title: "Laptop",
            subtitle: "Macbook pro 13",
        },
        orders: 4000,
        price: 500,
        "ads-spent": 4.7,
        refunds: 18,
    },
    {
        id: 5,
        product: {
            avatar: watch,
            title: "Watch",
            subtitle: "Digital watch",
        },
        orders: 2000,
        price: 15,
        "ads-spent": 2.5,
        refunds: 10,
    },
];
