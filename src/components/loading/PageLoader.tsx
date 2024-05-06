import { Box, CircularProgress, Stack } from '@mui/material';

const PageLoader = () => {
  return (
    <Stack direction='row'>
      <CircularProgress color="secondary" />
    </Stack>
  );
};

export default PageLoader;
