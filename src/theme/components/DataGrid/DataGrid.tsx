import { Theme } from '@mui/material';
import { GridFooter, GridSkeletonCell } from '@mui/x-data-grid';

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
      skeletonCell: GridSkeletonCell,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      border: 'none',
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
      // minWidth: theme.spacing(18.75),
    }),
    columnHeaderTitle: ({ theme }) => ({
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
    }),
    columnHeaderTitleContainer: () => ({
      gap: 5,
    }),
    columnSeparator: () => ({
      display: 'none',
    }),
    cell: ({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.fontFamily?.split(',')[1],
      // minWidth: theme.spacing(18.75),
      border: 'none',
      display: 'flex',
      alignItems: 'center',
    }),
    row: () => ({
      border: 'none',
      width: 1,
    }),
    virtualScroller: () => ({
      overflowX: 'scroll !important' as 'scroll',
    }),
    virtualScrollerContent: () => ({
      height: '100%',
    }),
    filler: () => ({
      display: 'none',
      height: 0,
      flex: 0,
      flexGrow: 0,
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
    footerContainer: ({ theme }) => ({
      minHeight: theme.spacing(12.5),
      maxHeight: theme.spacing(12.5),
      borderBottomLeftRadius: theme.spacing(2.5),
      borderBottomRightRadius: theme.spacing(2.5),
    }),
    cellEmpty: ({ theme }) => ({
      width: theme.spacing(0),
      maxWidth: theme.spacing(0),
    }),
    sortIcon: () => ({
      color: 'initial',
    }),
  },
};

export default DataGrid;
