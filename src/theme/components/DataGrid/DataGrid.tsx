import { Theme } from '@mui/material';

import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGrid: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableRowSelectionOnClick: true,
    disableColumnMenu: true,
    pagination: true,
    density: 'comfortable',
    scrollbarSize: 1,
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
      gap: 8,
    }),
    columnSeparator: () => ({
      display: 'none',
    }),
    cell: ({ theme }) => ({
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
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
      width: 'auto',
      minHeight: 'fit-content',
    }),
    virtualScrollerRenderZone: () => ({
      width: 'auto',
      height: '100%',
    }),
    filler: () => ({
      display: 'none',
      height: '0 !important',
      flex: 0,
      flexGrow: 0,
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.divider,
    }),
    footerContainer: ({ theme }) => ({
      // minHeight: theme.spacing(12.5),
      // maxHeight: theme.spacing(12.5),
      borderBottomLeftRadius: theme.spacing(2.5),
      borderBottomRightRadius: theme.spacing(2.5),
    }),
    cellEmpty: ({ theme }) => ({
      width: theme.spacing(0),
      maxWidth: theme.spacing(0),
    }),
    sortIcon: () => ({
      color: 'initial',
      width: 20,
    }),
    overlay: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
    }),
  },
};

export default DataGrid;
