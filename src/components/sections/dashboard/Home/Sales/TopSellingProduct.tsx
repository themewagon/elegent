import { ReactElement } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { columns, rows } from 'data/tableData';

const TopSellingProduct = (): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();

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
      <Typography
        variant="h5"
        color={(theme) => theme.palette.text.primary}
        padding={(theme) => theme.spacing(3.75)}
      >
        Top Selling Product
      </Typography>
      <Divider />
      <Stack height={1} overflow={'hidden'}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
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
