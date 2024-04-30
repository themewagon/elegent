import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={(theme) => theme.palette.background.default}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
