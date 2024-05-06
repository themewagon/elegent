import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 7.5,
      backgroundColor: theme.palette.common.white,
      '&:before': {
        borderBottom: 'none',
      },
      '&:after': {
        borderBottom: 'none',
      },
      '&:hover': {
        border: '1px solid black',
        backgroundColor: theme.palette.common.white,
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        border: 0,
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
    adornedEnd: ({ theme }) => ({
      color: theme.palette.common.black,
    }),
    inputAdornedEnd: ({ theme }) => ({
      color: theme.palette.common.black,
    }),
  },
};

export default FilledInput;
