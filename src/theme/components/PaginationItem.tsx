import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const PaginationItem: Components<Omit<Theme, 'components'>>['MuiPaginationItem'] = {
  defaultProps: {
    selected: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
};

export default PaginationItem;
