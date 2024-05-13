import { Divider, Stack, Typography } from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { columns, rows } from 'data/tableData';

const TopSellingProduct = (): React.ReactElement => {
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
      <Stack height={1}>
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            // pagination: { paginationModel: { pageSize: 4, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          // autoHeight
          autoPageSize
          style={{ height: 'fit-content' }}
          onPaginationModelChange={() => {
            console.log('Pagination model changed');
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TopSellingProduct;
