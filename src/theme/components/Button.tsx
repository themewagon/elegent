import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {},
    styleOverrides: {
        root: ({ theme }) => ({
            
        }),
        contained: ({ theme }) => ({
            fontWeight: theme.typography.body1.fontWeight,
            fontSize: theme.typography.body1.fontSize,
            textTransform: 'none',
            borderRadius: 30,
            boxShadow: 'none',
            paddingTop: 12,  
            paddingBottom: 12,  
            color: theme.palette.common.white,
            ":hover": {
                boxShadow: 'none',
            }, 
        }),
        text: ({ theme }) => ({
            color: theme.palette.primary.main,
            textTransform: 'none',
            ":hover": {
                backgroundColor: 'transparent',
            }
        }),
    },
};

export default Button;