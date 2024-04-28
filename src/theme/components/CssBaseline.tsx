import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
    defaultProps: {
        // enableColorScheme: true, 
    },
    styleOverrides: {
        
    },
};

export default CssBaseline;