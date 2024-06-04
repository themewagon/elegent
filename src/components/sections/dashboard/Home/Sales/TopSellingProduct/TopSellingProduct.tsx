import { ChangeEvent, ReactElement, useMemo, useState } from 'react';
import {
  Avatar,
  Divider,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Tooltip,
  Typography,
  debounce,
} from '@mui/material';
import { DataGrid, GridApi, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import IconifyIcon from 'components/base/IconifyIcon';
import {
  getApplyQuickFilterFnAdsSpentField,
  getApplyQuickFilterFnPriceField,
  getApplyQuickFilterFnProductField,
} from 'helpers/datagrid-filter-functions';
import { rows } from 'data/products';
import CustomPagination from './CustomPagination';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
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
            <Typography variant="body1" color="text.primary">
              {params.value.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
  const [search, setSearch] = useState('');

  const visibleColumns = useMemo(
    () =>
      columns
        .filter((column) => column.field !== 'id')
        .map((column) => {
          if (column.field === 'product') {
            return {
              ...column,
              getApplyQuickFilterFn: getApplyQuickFilterFnProductField,
            };
          }
          if (column.field === 'price') {
            return {
              ...column,
              getApplyQuickFilterFn: getApplyQuickFilterFnPriceField,
            };
          }
          if (column.field === 'adsSpent') {
            return {
              ...column,
              getApplyQuickFilterFn: getApplyQuickFilterFnAdsSpentField,
            };
          }
          if (column.field === 'refunds') {
            return {
              ...column,
              getApplyQuickFilterFn: undefined,
            };
          }
          return column;
        }),
    [columns],
  );

  const handleGridSearch = useMemo(() => {
    return debounce((searchValue) => {
      apiRef.current.setQuickFilterValues(
        searchValue.split(' ').filter((word: any) => word !== ''),
      );
    }, 250);
  }, [apiRef]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearch(searchValue);
    handleGridSearch(searchValue);
  };

  return (
    <Stack
      bgcolor="background.paper"
      borderRadius={5}
      width={1}
      // maxWidth={(theme) => theme.spacing(110)}
      height={1}
    >
      <Stack
        direction={{ sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ sm: 'center' }}
        padding={3.75}
        gap={3.75}
      >
        <Typography variant="h5" color="text.primary">
          Top Selling Product
        </Typography>
        <TextField
          variant="filled"
          placeholder="Search..."
          id="search-input"
          name="table-search-input"
          onChange={handleChange}
          value={search}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="mdi:search" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Divider />
      <Stack height={1}>
        <DataGrid
          apiRef={apiRef}
          columns={visibleColumns}
          rows={rows}
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
            pagination: CustomPagination,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TopSellingProduct;
