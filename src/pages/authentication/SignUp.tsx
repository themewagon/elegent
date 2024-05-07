import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import signupBanner from 'assets/authentication-banners/signup.png';
import IconifyIcon from 'components/base/IconifyIcon';
import logo from 'assets/logo/elegant-logo.png';
import Image from 'components/base/Image';
import { theme } from 'theme/theme';

const SignUp = () => {
  return (
    <Stack
      direction="row"
      bgcolor={theme.palette.background.paper}
      boxShadow={theme.shadows[3]}
      height={591}
      width={{ md: 960 }}
    >
      <Stack width={0.5} m={theme.spacing(2.5)} gap={10}>
        <Link href="/">
          <Image src={logo} width="82.6px" />
        </Link>
        <Stack alignItems="center" gap={2.5} width={330} mx="auto">
          <Typography variant="h3">Signup</Typography>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="name-input1">
              Name
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your full name"
              id="name-input1"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="mdi:user" width={1} height={1} />
                </InputAdornment>
              }
              sx={{
                width: 1,
                backgroundColor: theme.palette.action.focus,
              }}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="email-input1">
              Email
            </InputLabel>
            <OutlinedInput
              placeholder="Enter your email"
              id="email-input1"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-email" width={1} height={1} />
                </InputAdornment>
              }
              sx={{
                width: 1,
                backgroundColor: theme.palette.action.focus,
              }}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="password-input2">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="Create password"
              type="password"
              id="password-input2"
              endAdornment={
                <InputAdornment position="end">
                  <IconifyIcon icon="ic:baseline-key" width={1} height={1} />
                </InputAdornment>
              }
              sx={{
                width: 1,
                backgroundColor: theme.palette.action.focus,
              }}
            />
          </FormControl>
          <Button variant="contained" fullWidth>
            Sign up
          </Button>
          <Typography variant="subtitle2" color={(theme) => theme.palette.text.secondary}>
            Already have an account ?{' '}
            <Link href="/authentication/login" underline="hover">
              Log in
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <Image
        alt="Signup banner"
        src={signupBanner}
        sx={{
          width: 0.5,
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Stack>
  );
};

export default SignUp;
