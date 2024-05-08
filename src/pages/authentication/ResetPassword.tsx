import { Stack } from '@mui/material';
import { theme } from 'theme/theme';

const ResetPassword = () => {
  return (
    <Stack
      direction="row"
      bgcolor={theme.palette.background.paper}
      boxShadow={theme.shadows[3]}
      height={560}
      width={{ md: 960 }}
    ></Stack>
  );
};

export default ResetPassword;
