import { Box, CircularProgress, Stack, StackOwnProps } from '@mui/material';

const PageLoader = (props: StackOwnProps) => {
  return (
    <Stack alignItems="center" justifyContent="center" height={1} {...props}>
      <Box height={'25vw'} width={'25vw'}>
        <CircularProgress color="secondary" />
      </Box>
    </Stack>
  );
};

export default PageLoader;
