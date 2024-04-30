import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      border: '1px solid #e1e1e1',
      '&:before': {
        borderBottom: 'none',
      },
      '&:after': {
        borderBottom: 'none',
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.common.white,
      },
    }),
    input: ({ theme }) => ({
      padding: theme.spacing(1.5, 2.5),
      '&::placeholder': {
        opacity: 1,
      },
    }),
  },
};

export default InputBase;
