import { Theme } from '@mui/material';
import { GridFooter } from '@mui/x-data-grid';

import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';
import CustomPagination from 'theme/components/DataGrid/CustomPagination';

const DataGrid: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableRowSelectionOnClick: true,
    disableColumnMenu: true,
    pagination: true,
    density: 'comfortable',
    scrollbarSize: 1,
    slots: {
      pagination: CustomPagination,
      footer: GridFooter,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      height: '100%',
      borderColor: theme.palette.divider,
      '--DataGrid-rowBorderColor': theme.palette.background.paper,
      '--DataGrid-containerBackground': theme.palette.background.paper,
      borderBottomLeftRadius: theme.spacing(2.5),
      borderBottomRightRadius: theme.spacing(2.5),
    }),
    main: ({ theme }) => ({
      padding: theme.spacing(0, 2.5),
    }),
    'container--top': ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      '::after': {
        content: 'none',
      },
    }),
    columnHeaders: ({ theme }) => ({
      borderBottom: 'none',
      backgroundColor: theme.palette.background.paper,
    }),
    columnHeaderTitle: ({ theme }) => ({
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
    }),
    columnSeparator: () => ({
      display: 'none',
    }),
    cell: ({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.fontFamily?.split(',')[1],
      border: 'none',
      display: 'flex',
      alignItems: 'center',
    }),
    row: () => ({
      border: 'none',
    }),
    virtualScroller: () => ({
      overflowX: 'scroll !important' as 'scroll',
    }),
    virtualScrollerContent: () => ({
      height: '100%',
    }),
    filler: () => ({
      height: 'auto',
      flex: 1,
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
    footerContainer: ({ theme }) => ({
      minHeight: theme.spacing(12.5),
      borderBottomLeftRadius: theme.spacing(2.5),
      borderBottomRightRadius: theme.spacing(2.5),
    }),
  },
};

export default DataGrid;
