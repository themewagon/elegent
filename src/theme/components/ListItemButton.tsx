import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
    },
};

export default ListItemButton;