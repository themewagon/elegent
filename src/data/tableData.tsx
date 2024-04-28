import { Avatar, Stack, Typography } from "@mui/material";

import relaxingChair from "assets/top-selling-products/relaxingChair.jpg";
import instaxCamera from "assets/top-selling-products/instaxCamera.jpg";
import nikeV22 from "assets/top-selling-products/nikeV22.jpg";
import laptop from "assets/top-selling-products/laptop.jpg";
import watch from "assets/top-selling-products/watch.jpg";


export const columns = [
    {
        field: "id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "product",
        headerName: "Product",
        flex: 1.5,
        // width: 200,
        renderCell: (params) => {
            console.log(params);
            return (
                <Stack direction="row" spacing={1.5} alignItems='center'>
                    <Avatar src={params.value.avatar} />
                    <Stack direction="column" spacing={0.5} justifyContent="space-between">
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
        flex: 1,
    },
    {
        field: "price",
        headerName: "Price",
        flex: 1,
    },
    {
        field: "ads-spent",
        headerName: "Ads Spent",
        flex: 1,
    },
    {
        field: "refunds",
        headerName: "Refunds",
        flex: 1,
        renderCell: ({row: { refunds }}) => {
            if(refunds > 0)
                return `>${refunds}`;
            else
                return `<${-refunds}`;
        }
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
        refunds: -11,
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
        refunds: -10,
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
        product: {
            avatar: relaxingChair,
            title: "Chair ",
            subtitle: "Relaxing chair",
        },
        orders: 6000,
        price: 80,
        "ads-spent": 5.8,
        refunds: -11,
    },
    {
        id: 9,
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
        id: 20,
        product: {
            avatar: watch,
            title: "Watch",
            subtitle: "Digital watch",
        },
        orders: 2000,
        price: 15,
        "ads-spent": 2.5,
        refunds: -10,
    },
];
