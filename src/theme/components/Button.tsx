import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { theme } from 'theme/theme';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
    defaultProps: {},
    styleOverrides: {
        root: ({ownerState}) => ({
            ...(ownerState.variant === 'contained' && {
                textTransform: 'none',
                color: '#FFF',
                borderRadius: '30px',
                boxShadow: 'none',
                fontSize: theme.typography.body1.fontSize,
                fontWeight: theme.typography.body1.fontWeight,
                height: '45px',
                ":hover": {
                    boxShadow: 'none',
                },
            }),
            ...(ownerState.variant === 'text' && {
                textTransform: 'none',
                color: theme.palette.primary.main,
                ":hover": {
                    backgroundColor: 'transparent',
                }
            }),
        }),
    },
};

export default Button;