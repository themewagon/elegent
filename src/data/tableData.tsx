import { Avatar, Link, Stack, Tooltip, Typography } from '@mui/material';

import relaxingChair from 'assets/top-selling-products/relaxingChair.jpg';
import instaxCamera from 'assets/top-selling-products/instaxCamera.jpg';
import nikeV22 from 'assets/top-selling-products/nikeV22.jpg';
import laptop from 'assets/top-selling-products/laptop.jpg';
import watch from 'assets/top-selling-products/watch.jpg';

export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    // flex: 1,
  },
  {
    field: 'product',
    headerName: 'Product',
    flex: 1,
    minWidth: 182.9625,
    renderCell: (params: any) => {
      return (
        <Stack direction="row" spacing={1.5} alignItems="center" component={Link} href="#!">
          <Tooltip title={params.value.title} placement="top" arrow>
            <Avatar src={params.value.avatar} sx={{ objectFit: 'cover' }} />
          </Tooltip>
          <Stack direction="column" spacing={0.5} justifyContent="space-between">
            <Typography
              variant="body1"
              color={(theme) => theme.palette.text.primary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              {params.value.title}
            </Typography>
            <Typography
              variant="body2"
              color={(theme) => theme.palette.text.secondary}
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
            >
              {params.value.subtitle}
            </Typography>
          </Stack>
        </Stack>
      );
    },
    sortComparator: (v1: any, v2: any) => v1.title.localeCompare(v2.title),
  },
  {
    field: 'orders',
    headerName: 'Orders',
    flex: 0.75,
    minWidth: 137.221875,
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 0.75,
    minWidth: 137.221875,
    renderCell: ({ row: { price } }: any) => {
      return `$${price}`;
    },
  },
  {
    field: 'adsSpent',
    headerName: 'Ads Spent',
    flex: 0.75,
    minWidth: 137.221875,
    renderCell: ({ row: { adsSpent } }: any) => {
      return `$${adsSpent.toFixed(3)}`;
    },
  },
  {
    field: 'refunds',
    headerName: 'Refunds',
    flex: 0.75,
    minWidth: 137.221875,
    renderCell: ({ row: { refunds } }: any) => {
      if (refunds > 0) return `> ${refunds}`;
      else return `< ${-refunds}`;
    },
  },
];

export const rows = [
  {
    id: 1,
    product: {
      avatar: nikeV22,
      title: 'Nike v22',
      subtitle: 'Running Shoes',
    },
    orders: 8000,
    price: 130,
    adsSpent: 9.5,
    refunds: 13,
  },
  {
    id: 2,
    product: {
      avatar: instaxCamera,
      title: 'Instax Camera',
      subtitle: 'Portable Camera',
    },
    orders: 3000,
    price: 45,
    adsSpent: 4.5,
    refunds: 18,
  },
  {
    id: 3,
    product: {
      avatar: relaxingChair,
      title: 'Chair ',
      subtitle: 'Relaxing chair',
    },
    orders: 6000,
    price: 80,
    adsSpent: 5.8,
    refunds: -11,
  },
  {
    id: 4,
    product: {
      avatar: laptop,
      title: 'Laptop',
      subtitle: 'Macbook pro 13',
    },
    orders: 4000,
    price: 500,
    adsSpent: 4.7,
    refunds: 18,
  },
  {
    id: 5,
    product: {
      avatar: watch,
      title: 'Watch',
      subtitle: 'Digital watch',
    },
    orders: 2000,
    price: 15,
    adsSpent: 2.5,
    refunds: -10,
  },
  {
    id: 6,
    product: {
      avatar: relaxingChair,
      title: 'Chair',
      subtitle: 'Relaxing chair',
    },
    orders: 6000,
    price: 80,
    adsSpent: 5.8,
    refunds: -11,
  },
  {
    id: 7,
    product: {
      avatar: instaxCamera,
      title: 'Instax Camera',
      subtitle: 'Portable Camera',
    },
    orders: 3000,
    price: 45,
    adsSpent: 4.5,
    refunds: 18,
  },
  {
    id: 8,
    product: {
      avatar: watch,
      title: 'Watch',
      subtitle: 'Digital watch',
    },
    orders: 2000,
    price: 15,
    adsSpent: 2.5,
    refunds: -10,
  },
  {
    id: 9,
    product: {
      avatar: nikeV22,
      title: 'Nike v22',
      subtitle: 'Running Shoes',
    },
    orders: 8000,
    price: 130,
    adsSpent: 9.5,
    refunds: 13,
  },
  {
    id: 10,
    product: {
      avatar: laptop,
      title: 'Laptop',
      subtitle: 'Macbook pro 13',
    },
    orders: 4000,
    price: 500,
    adsSpent: 4.7,
    refunds: 18,
  },
];
