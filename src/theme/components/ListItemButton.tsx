import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
        }
    }
};

export default ListItemButton;