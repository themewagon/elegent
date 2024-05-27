import { ChangeEvent, ReactElement, useState, useTransition } from 'react';
import {
  Avatar,
  Divider,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { rows } from 'data/Products';
import IconifyIcon from 'components/base/IconifyIcon';

const columns = [
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
            <Typography variant="body1" color={(theme) => theme.palette.text.primary}>
              {params.value.title}
            </Typography>
            <Typography variant="body2" color={(theme) => theme.palette.text.secondary}>
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

const TopSellingProduct = (): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();

  const [dataRows, setDataRows] = useState<any[]>(rows);
  const [isPending, startTransition] = useTransition();

  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  // useEffect(() => {
  //   console.log(data);
  //   console.log(rows);
  // }, [data]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    startTransition(() => {
      const filteredRows = rows.filter((row) => {
        return (
          row.product.title.toLowerCase().includes(searchValue) ||
          row.product.subtitle.toLowerCase().includes(searchValue) ||
          row.orders.toString().includes(searchValue) ||
          row.price.toString().includes(searchValue) ||
          row.adsSpent.toString().includes(searchValue) ||
          row.refunds.toString().includes(searchValue)
        );
      });
      console.log(filteredRows);
      setDataRows(filteredRows);
    });
  };

  return (
    <Stack
      bgcolor={(theme) => theme.palette.background.paper}
      borderRadius={(theme) => theme.shape.borderRadius * 1.25}
      width={1}
      // maxWidth={(theme) => theme.spacing(110)}
      height={1}
    >
      <Stack
        direction={{ sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        padding={(theme) => theme.spacing(3.75)}
        gap={3.75}
      >
        <Typography variant="h5" color={(theme) => theme.palette.text.primary}>
          Top Selling Product
        </Typography>
        <OutlinedInput
          placeholder="Search..."
          id="search-input"
          name="table-search-input"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconifyIcon icon="mdi:search" width={1} height={1} />
            </InputAdornment>
          }
          sx={(theme) => ({
            backgroundColor: theme.palette.action.focus,
            maxWidth: theme.spacing(30),
          })}
        />
      </Stack>
      <Divider />
      <Stack height={1} overflow={'hidden'}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={dataRows}
          sx={{
            display: 'flex',
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          slots={{
            loadingOverlay: () => (isPending ? <h1>Loading...</h1> : ''),
            noRowsOverlay: () => <h1>NO RESULTS</h1>,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          loading={isPending}
        />
      </Stack>
    </Stack>
  );
};

export default TopSellingProduct;
