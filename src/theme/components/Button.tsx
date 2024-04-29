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
            ":hover": {
                backgroundColor: 'transparent',
            },
        }),
        outlined: ({ theme }) => ({
         
        }),
        contained: ({ theme }) => ({
            borderRadius: 30,
            boxShadow: 'none',
            color: theme.palette.common.white,
            ":hover": {
                boxShadow: 'none',
            }, 
        }),
        icon: ({ theme }) => ({
            paddingTop: 6,  
            paddingBottom: 6,
        }),
        fullWidth: ({ theme }) => ({

        }),
    },
};

export default Button;