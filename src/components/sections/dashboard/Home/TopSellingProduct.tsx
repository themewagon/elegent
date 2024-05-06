import { Box, Divider, Typography } from '@mui/material';
import { DataGrid, GridApi, GridFooter, useGridApiRef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CustomPagination from 'components/base/CustomPagination';
import { columns, rows as dataRows } from 'data/TableData';
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
    console.log(dataRows);
  }, [data]);

  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: theme.spacing(2.5),
        width: '100%',
        height: '100%',
      }}
    >
      <Typography variant="h5" color={(theme) => theme.palette.text.primary} padding="30px">
        Top Selling Product
      </Typography>
      <Divider sx={{ borderColor: '#E1E1E1' }} />
      <Box
        sx={{
          height: '100%',
          '& .MuiDataGrid-root': {
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            height: '100%',
            '--DataGrid-rowBorderColor': theme.palette.background.paper,
            '--DataGrid-containerBackground': theme.palette.background.paper,
            borderBottomLeftRadius: theme.spacing(2.5),
            borderBottomRightRadius: theme.spacing(2.5),
            borderColor: theme.palette.divider,
          },
          '& .MuiDataGrid-main': {
            padding: theme.spacing(0, 2.5),
          },
          "& .MuiDataGrid-container--top [role='row']": {
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiDataGrid-columnHeaderRow': {
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiDataGrid-topContainer::after': {
            content: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-cell': {
            color: theme.palette.text.secondary,
            fontSize: theme.typography.body1.fontSize,
            fontWeight: theme.typography.body1.fontWeight,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-row': {
            border: 'none',
          },
          '& .MuiDataGrid-withBorderColor': {
            borderColor: '#E1E1E1',
          },
          '& .MuiDataGrid-footerContainer': {
            minHeight: theme.spacing(12.5),
            borderBottomLeftRadius: theme.spacing(2.5),
            borderBottomRightRadius: theme.spacing(2.5),
          },
          '& .MuiDataGrid-filler': {
            height: 'auto',
            flex: 1,
          },
          '& .MuiDataGrid-virtualScrollerContent': {
            height: '100%',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: theme.typography.subtitle1?.fontSize,
            fontWeight: theme.typography.subtitle1?.fontWeight,
          },
        }}
      >
        <DataGrid
          pagination={true}
          apiRef={apiRef}
          disableRowSelectionOnClick
          slots={{
            pagination: CustomPagination,
            footer: GridFooter,
          }}
          disableColumnMenu={true}
          // autoHeight
          density="comfortable"
          columns={columns}
          rows={dataRows}
          initialState={{
            pagination: { paginationModel: { pageSize: 9, page: 0 } },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          scrollbarSize={1}
          // autoHeight
        />
      </Box>
    </Box>
  );
};

export default TopSellingProduct;
