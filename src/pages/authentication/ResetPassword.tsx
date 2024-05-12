import { Stack } from '@mui/material';

const ResetPassword = () => {
  return (
    <Stack
      direction="row"
      bgcolor={(theme) => theme.palette.background.paper}
      boxShadow={(theme) => theme.shadows[3]}
      height={560}
      width={{ md: 960 }}
    ></Stack>
  );
};

export default ResetPassword;
