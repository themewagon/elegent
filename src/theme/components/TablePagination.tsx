import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const TablePagination: Components<Omit<Theme, 'components'>>['MuiTablePagination'] = {
  defaultProps: {
    labelDisplayedRows: ({ from, to, count }) => {
      // return `Showing ${to - from + 1} of ${count} products`;
      return `Showing ${from} to ${to} of ${count} products`;
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      ':last-child': {
        borderRadius: theme.shape.borderRadius * 5,
      },
      borderRadius: theme.shape.borderRadius * 5,
    }),
    toolbar: ({ theme }) => ({
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2.5, 0),
      paddingLeft: theme.spacing(2.5),
    }),
    spacer: {
      flex: 'none',
    },
    select: {
      display: 'none !important',
    },
    selectLabel: {
      display: 'none',
    },
    input: {
      display: 'none',
    },
    displayedRows: ({ theme }) => ({
      flex: 'auto',
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.body2.fontWeight,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily?.split(',')[1],
    }),
    actions: {},
  },
};

export default TablePagination;
