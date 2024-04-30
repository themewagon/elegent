import { Box, Divider, Typography } from '@mui/material';
import { DataGrid, GridFooter } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CustomPagination from 'components/base/CustomPagination';
import { columns, rows as dataRows } from 'data/TableData';
import { useEffect } from 'react';
import { theme } from 'theme/theme';

const TopSellingProduct = () => {
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
            backgroundColor: '#FFF',
            border: 'none',
            height: '100%',
            '--DataGrid-rowBorderColor': '#FFF',
            '--DataGrid-containerBackground': '#FFF',
          },
          '& .MuiDataGrid-main': {
            padding: '0 20px',
          },
          "& .MuiDataGrid-container--top [role='row']": {
            backgroundColor: '#FFF',
          },
          '& .MuiDataGrid-columnHeaderRow': {
            backgroundColor: '#FFF',
          },
          '& .MuiDataGrid-topContainer::after': {
            content: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            backgroundColor: '#FFF !important',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-cell': {
            border: 'none',
            color: (theme) => theme.palette.text.secondary,
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiDataGrid-row': {
            border: 'none',
          },
          '& .MuiDataGrid-withBorderColor': {
            borderColor: 'transparent',
          },
          '& .MuiDataGrid-footerContainer': {
            minHeight: '100px',
          },
          '& .MuiDataGrid-filler': {
            height: 'auto',
            flex: 1,
          },
          '& .MuiDataGrid-virtualScrollerContent': {
            height: '100%',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '16px',
            fontWeight: 500,
          },
        }}
      >
        <DataGrid
          pagination={true}
          disableRowSelectionOnClick
          slots={{
            pagination: CustomPagination,
            footer: GridFooter,
          }}
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
        />
      </Box>
    </Box>
  );
};

export default TopSellingProduct;
