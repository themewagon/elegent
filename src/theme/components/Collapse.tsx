import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Collapse: Components<Omit<Theme, 'components'>>['MuiCollapse'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({}) => ({
      width: '100%',
    }),
  },
};

export default Collapse;
