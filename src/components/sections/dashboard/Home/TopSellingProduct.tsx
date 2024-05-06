import { Box, Divider, Typography } from '@mui/material';
import { DataGrid, GridApi, useGridApiRef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { columns, rows } from 'data/tableData';
import { useEffect } from 'react';
import { theme } from 'theme/theme';

const TopSellingProduct = () => {
  const apiRef = useGridApiRef<GridApi>();

  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
    maxColumns: 6,
  });

  useEffect(() => {
    console.log(data);
    console.log(rows);
  }, [data]);

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius * 1.25,
        width: 1,
        height: 1,
      }}
    >
      <Typography variant="h5" color={(theme) => theme.palette.text.primary} padding="30px">
        Top Selling Product
      </Typography>
      <Divider />
      <Box
        sx={{
          height: 1,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: { paginationModel: { pageSize: 8, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TopSellingProduct;
