import { ReactElement, useState } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { columns, rows } from 'data/tableData';

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

  return (
    <Stack
      bgcolor={(theme) => theme.palette.background.paper}
      borderRadius={(theme) => theme.shape.borderRadius * 1.25}
      width={1}
      // maxWidth={(theme) => theme.spacing(110)}
      height={1}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={(theme) => theme.spacing(3.75)}
      >
        <Typography variant="h5" color={(theme) => theme.palette.text.primary}>
          Top Selling Product
        </Typography>
        {/* <OutlinedInput
          placeholder="Search..."
          id="search-input"
          endAdornment={
            <InputAdornment position="end">
              <IconifyIcon icon="mdi:search" width={1} height={1} />
            </InputAdornment>
          }
          sx={(theme) => ({
            // width: 1,
            backgroundColor: theme.palette.action.focus,
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
