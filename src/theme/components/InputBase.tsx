import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
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
        fontFamily: theme.typography.fontFamily?.split(',')[1],
      },
    }),
  },
};

export default InputBase;
