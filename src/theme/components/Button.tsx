import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      textTransform: 'none',
      textAlign: 'center',
      letterSpacing: 0,
    }),
    text: ({ theme }) => ({
      color: theme.palette.primary.main,
      padding: theme.spacing(1.5),
      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    outlined: () => ({
      border: 1,
      borderStyle: 'solid',
      borderRadius: 30,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.75, 3.375),
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.5, 7.75),
    }),
    outlinedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.5, 7.75),
    }),
    contained: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      borderRadius: 30,
      boxShadow: 'none',
      color: theme.palette.common.white,
      ':hover': {
        boxShadow: 'none',
      },
    }),
    containedSizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.5, 7.75),
    }),
    icon: ({ theme }) => ({
      paddingTop: theme.spacing(0.75),
      paddingBottom: theme.spacing(0.75),
    }),
    fullWidth: ({ theme }) => ({
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
    }),
    disabled: () => ({
      cursor: 'not-allowed',
    }),
  },
};

export default Button;
