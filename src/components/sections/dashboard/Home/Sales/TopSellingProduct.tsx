import { ChangeEvent, ReactElement, useState } from 'react';
import { Divider, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { columns, rows } from 'data/tableData';
import IconifyIcon from 'components/base/IconifyIcon';

const TopSellingProduct = (): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();

  const [dataRows, setDataRows] = useState<any[]>(rows);

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
        {/* <OutlinedInput
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
        /> */}
      </Stack>
      <Divider />
      <Stack height={1} overflow={'hidden'}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={dataRows}
          sx={{ display: 'grid', gridTemplateRows: 'auto 1f auto' }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TopSellingProduct;
